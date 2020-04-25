const LfuiWidget = {
  id: "lfuiWidget",
  label: "Lfui Code",
  pattern: /<LfuiWrapper>\n[^]*?\n<\/LfuiWrapper>/,
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

    return `<LfuiWrapper>${obj.content}</LfuiWrapper>`;
  },


}
export default LfuiWidget