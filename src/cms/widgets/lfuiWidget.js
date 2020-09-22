const LfuiWidget = {
  id: "lfuiWidget",
  label: "Lfui Code",
  pattern: /<LfuiWrapper>([^]*?)<\/LfuiWrapper><div>([^]*?)<\/div>/,
  fields: [ 
  {
    label: "Lfui Html",
    name: "lfuiCode",
    widget: "markdown"

  },
  {
    label: "Lfui Script",
    name: "lfuiScript",
    widget: "markdown"

  }],
  fromBlock: function(match) {
    return {
      lfuiCode: match[1],
      lfuiScript: match[2],
    }
  },
  toBlock: function(obj) {

    return `<LfuiWrapper>\n${obj.lfuiCode}\n\n\n</LfuiWrapper><div>${obj.lfuiScript}</div>`;
  },


}
export default LfuiWidget