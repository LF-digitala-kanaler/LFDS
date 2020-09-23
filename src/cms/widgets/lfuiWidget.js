const LfuiWidget = {
  id: "lfuiWidget",
  label: "Lfui Code",
  pattern: /<LfuiWrapper><div>([^]*?)<\/div>([^]*?)<div><\/div><\/LfuiWrapper>/,
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

    return `<LfuiWrapper>\n<div>${obj.lfuiCode}</div><div>${obj.lfuiScript}</div>\n</LfuiWrapper>`;
  },


}
export default LfuiWidget