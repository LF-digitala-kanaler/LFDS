const LfuiWidget = {
  id: "lfuiWidget",
  label: "Lfui Code",
  pattern: /<LfuiWrapper>\n\n[^]*?\n<\/LfuiWrapper>/,
  fields: [ 
  {
    label: "Content",
    name: "content",
    widget: "markdown"

  }],
  fromBlock: function(match) {
    return {
      content: match[1],
    }
  },
  toBlock: function(obj) {

    return `<LfuiWrapper>\n\n${obj.content}\n</LfuiWrapper>`;
  },


}
export default LfuiWidget