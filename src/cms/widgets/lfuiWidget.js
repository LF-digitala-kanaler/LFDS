const LfuiWidget = {
  id: "lfuiWidget",
  label: "Lfui Code",
  pattern: /<LfuiWrapper script="(.*)">([^]*?)<\/LfuiWrapper>/,
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
      lfuiCode: match[2],
      lfuiScript: match[1],
    }
  },
  toBlock: function(obj) {

    return `<LfuiWrapper script="${obj.lfuiScript.replace(/(\r\n|\n|\r)/gm, "")}">\n${obj.lfuiCode}\n</LfuiWrapper>`;
  },


}
export default LfuiWidget