"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_TYPE = 'FrontmatterMarkdownFile';
exports.isFrontmatterMarkdownFileNode = (n) => n.internal.type === exports.NODE_TYPE;
exports.isFrontmatterMarkdownNode = ({ node, getNode, }) => {
    const parent = node.parent ? getNode(node.parent) : null;
    return !!(parent && exports.isFrontmatterMarkdownFileNode(parent));
};
__export(require("./gatsby-node"));
//# sourceMappingURL=index.js.map