const LfuiWidget = {
  id: "lfuiWidget",
  label: "Lfui Code",
  pattern: /^<span><LfuiWrapper>([^]*?)<\/LfuiWrapper><script>[^]*?<\/script><\/span>/,
  fields: [ 
  {
    label: "Lfui Html",
    name: "lfuiCode",
    widget: "markdown"

  },
  {
    label: "Lfui Script",
    name: "lfuiScript",
    widget: "string",
    required: false

  }],
  fromBlock: function(match) {
    return {
      lfuiCode: match[1],
      lfuiScript: match[2],
    }
  },
  toBlock: function(obj) {
    return `<div><LfuiWrapper>${obj.lfuiCode}</LfuiWrapper><script>${obj.lfuiScript}</script></div>`;
  },


}
export default LfuiWidget