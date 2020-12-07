var visit = require('unist-util-visit');

module.exports = ({
  markdownAST
}) => {
  visit(markdownAST, 'link', node => {
    if (node.url.includes('/LFUI-components') || node.url.includes('/Prototypes')) {
      if (!node.data) {
        node.data = {
          hProperties: {}
        };
      }
      node.data.hProperties.target = '_target', node.data.hProperties.rel = 'external nofollow noopener noreferrer';
    }
  });
  return markdownAST;
};