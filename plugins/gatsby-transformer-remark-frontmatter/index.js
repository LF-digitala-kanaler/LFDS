"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFrontmatterMarkdownNode = exports.isFrontmatterMarkdownFileNode = exports.NODE_TYPE = void 0;
exports.NODE_TYPE = 'FrontmatterMarkdownFile';
exports.isFrontmatterMarkdownFileNode = (n) => n.internal.type === exports.NODE_TYPE;
exports.isFrontmatterMarkdownNode = ({ node, getNode, }) => {
    const parent = node.parent ? getNode(node.parent) : null;
    return !!(parent && exports.isFrontmatterMarkdownFileNode(parent));
};
__exportStar(require("./gatsby-node"), exports);
//# sourceMappingURL=index.js.map