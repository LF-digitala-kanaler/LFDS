"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const index_1 = require("./index");
// map of node ids to field names to created frontmatter markdown nodes.
// When the FrontmatterFile node is created, a new entry is added with
// all fields set to null
// we know that the frontmattermd field is ready to be created if all
// field_names are set to the string ids of the created markdown nodes
const node_field_map = {};
const node_remaining_fields = {};
const destructureFrontmatter = (frontmatter) => {
    
    return {
        schema: objectSchema(frontmatter),
        values: objectValues(frontmatter),
    };
};
const objectSchema = (obj) => {
    
    if (Array.isArray(obj)) {
        return obj.map(objectSchema);
    }
    else if ((typeof obj) === 'object') {
        return Object.entries(obj)
            .reduce((acc, [key, value]) => (Object.assign({}, acc, { [key]: objectSchema(value) })), {});
    }
    else {
        return null;
    }
};
const objectValues = (obj) => {
    if ((typeof obj) === 'object') {
        return Object.entries(obj)
            .reduce((acc, [itemKey, item]) => (Object.assign({}, acc, lodash_1.default.mapKeys(objectValues(item), (nestedValue, nestedKey) => `[${JSON.stringify(itemKey)}]${nestedKey}`))), {});
    }
    else {
        return { '': obj };
    }
};
const getFieldMap = (node) => node_field_map[node.id];
const setFieldMarkdownNode = (node, field_name, markdownNode) => {
    if (!node_field_map[node.id])
        node_field_map[node.id] = {};
    if (!node_remaining_fields[node.id])
        node_remaining_fields[node.id] = new Set();
    const path = lodash_1.default.toPath(field_name);
    const nodePath = [...path.slice(0, -1), `${path[path.length - 1]}___NODE`];
    node_remaining_fields[node.id].delete(field_name);
    const fields = node_field_map[node.id];
    lodash_1.default.unset(fields, path);
    lodash_1.default.set(fields, nodePath, markdownNode.id);
};
const nodeIsReady = (node) => node_remaining_fields[node.id]
    && node_remaining_fields[node.id].size === 0;
const shouldUseField = (filter) => ([key, value]) => {
    if (filter.kind === 'blacklist' && filter.fields.includes(key))
        return false;
    if (filter.kind === 'whitelist' && !filter.fields.includes(key))
        return false;
    return !!(typeof value === 'string' && value);
};
const createFrontmatterMdFileNode = ({ createNodeId, createContentDigest, getNode, actions: { createNode, createParentChildLink }, }, [field, value], parent) => {
    const parentParent = parent.parent && getNode(parent.parent);
    const fileParent = parentParent && parentParent.internal.type === 'File' ? parentParent : null;
    const frontmatterMdNode = Object.assign({}, fileParent, { id: createNodeId(`${parent.id}:${field} >>> ${index_1.NODE_TYPE}`), parent: parent.id, children: [], internal: {
            content: value,
            contentDigest: createContentDigest(value),
            mediaType: 'text/markdown',
            type: index_1.NODE_TYPE,
        } });
    frontmatterMdNode.frontmatterField = field;
    frontmatterMdNode.frontmatterValue = value;
    // errors if fields are set on a new node
    // unfortunately we can't reuse any third-party
    // changes to file nodes
    delete frontmatterMdNode.fields;
    // creation is deferred since we could have a race
    // condition if we create a node before the node_field_map
    // has been entirely populated. onCreateNode is async
    // so the linkNodes fn could be called and think that
    // it's ready to add the frontmattermd, but in reality
    // we just haven't yet added all of the fields to the
    // node_field_map (our Object.entries iteration hasn't
    // completed yet)
    return () => {
        createNode(frontmatterMdNode);
        if (parent)
            createParentChildLink({ parent, child: frontmatterMdNode });
    };
};
/**
 * Creates the FrontmatterMarkdownFile nodes from the
 * valid frontmatter fields of a MarkdownRemark node
 * @param node the MarkdownRemark node
 * @param helpers NodePluginArgs
 * @param filter a predicate to filter vaild frontmatter fields
 */
const createFrontmatterNodes = (node, helpers, filter) => {
    const { getNode } = helpers;
    if (index_1.isFrontmatterMarkdownNode({ node, getNode }))
        return;
    const { schema, values } = destructureFrontmatter(node.frontmatter);
    if (!schema)
        return;
    node_field_map[node.id] = schema;
    node_remaining_fields[node.id] = new Set(Object.keys(values));
    const createFns = Object.entries(values).reduce((acc, pair) => {
        if (filter(pair)) {
            acc.push(createFrontmatterMdFileNode(helpers, pair, node));
        }
        return acc;
    }, []);
    // actually create the FrontmatterMarkdownFile nodes
    createFns.map(fn => fn());
};
/**
 * Links the MarkdownRemark nodes created by gatsby-transformer-remark
 * to the original MarkdownRemark node where the frontmatter came from
 * using the frontmattermd field
 *
 * @param node a MarkdownRemark node
 * @param helpers NodePluginArgs
 */
const linkNodes = (node, helpers) => {
    const { getNode, actions: { createNodeField }, } = helpers;
    // we only operate on MarkdownRemark nodes that are children of FrontmatterMarkdownFile nodes
    if (!index_1.isFrontmatterMarkdownNode({ node, getNode }))
        return;
    // get the parent, the FrontmatterMarkdownFile node
    const fileNode = getNode(node.parent);
    // get the parent's parent, the original MarkdownNode
    const markdownNode = getNode(fileNode.parent);
    const field = fileNode.frontmatterField;
    // add the node id to the map
    setFieldMarkdownNode(markdownNode, field, node);
    if (!nodeIsReady(markdownNode))
        return;
    const map_entry = getFieldMap(markdownNode);
    createNodeField({
        name: 'frontmattermd',
        node: markdownNode,
        value: map_entry,
    });
};
exports.onCreateNode = async (helpers, pluginOptions = { plugins: [] }) => {
    const { node } = helpers;
    const { whitelist, blacklist } = pluginOptions;
    if (whitelist && blacklist) {
        throw new Error('Cannot provide both a whitelist and a blacklist to gatsby-transformer-remark-frontmatter');
    }
    const filter = shouldUseField(whitelist
        ? { kind: 'whitelist', fields: whitelist }
        : { kind: 'blacklist', fields: blacklist || [] });
    if (!node || node.internal.type !== 'MarkdownRemark')
        return;
    createFrontmatterNodes(node, helpers, filter);
    linkNodes(node, helpers);
};
//# sourceMappingURL=gatsby-node.js.map