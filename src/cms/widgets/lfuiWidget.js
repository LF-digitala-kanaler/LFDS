const LfuiWidget = {
  id: "lfuiWidget",
  label: "Lfui Code",
  pattern: /<LfuiWrapper>[^]*?<\/LfuiWrapper>/,
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

    return `${obj.content}`;
  },


}
export default LfuiWidget