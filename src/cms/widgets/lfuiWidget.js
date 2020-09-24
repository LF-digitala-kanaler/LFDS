const LfuiWidget = {
  id: "lfuiWidget",
  label: "Lfui Code",
  pattern: /^<LfuiWrapper>([^]*?)<script>eval(([^]*?))<\/script><\/LfuiWrapper>/,
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
    return `<LfuiWrapper>${obj.lfuiCode}<script>eval(${obj.lfuiScript})</script></LfuiWrapper>`;
  },


}
export default LfuiWidget