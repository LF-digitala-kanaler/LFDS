const LfuiWidget = {
  id: "lfuiWidget",
  label: "Lfui Code",
  pattern: /<LfuiWrapper>([^]*?)<\/LfuiWrapper>/,
  fields: [ 
  {
    label: "Lfui Code",
    name: "lfuiCode",
    widget: "markdown"

  }],
  fromBlock: function(match) {
    return {
      lfuiCode: match[1],
    }
  },
  toBlock: function(obj) {

    return `<LfuiWrapper>\n${obj.lfuiCode}\n</LfuiWrapper>`;
  },


}
export default LfuiWidget