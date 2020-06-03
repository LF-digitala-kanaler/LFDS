const relativeLinks = require('remark-relative-links');

module.exports = ({ markdownAST }, options) => {
  const transformer = relativeLinks(options);

  transformer(markdownAST, options);
};