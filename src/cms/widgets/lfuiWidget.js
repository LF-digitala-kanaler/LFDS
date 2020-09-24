const LfuiWidget = {
  id: "lfuiWidget",
  label: "Lfui Code",
  pattern: /^<div><LfuiWrapper>([^]*?)<\/LfuiWrapper><script>([^]*?)<\/script><\/div>/,
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
      lfuiScript: eval(match[2]),
    }
  },
  toBlock: function(obj) {
    return `<div><LfuiWrapper>${obj.lfuiCode}</LfuiWrapper><script>${obj.lfuiScript}</script></div>`;
  },


}
export default LfuiWidget