const LfuiWidget = {
  id: 'lfuiWidget',
  label: 'Lfui Code',
  pattern: /<LfuiWrapper script="([^]*?)">\n\n([^]*?)\n<\/LfuiWrapper>/,
  fields: [
    {
      label: 'Lfui Html',
      name: 'lfuiCode',
      widget: 'markdown',
    },
    {
      label: 'Lfui Script',
      name: 'lfuiScript',
      widget: 'string',
      required: false,
    },
  ],
  fromBlock: function (match) {
    return {
      lfuiCode: match[2],
      lfuiScript: match[1],
    }
  },
  toBlock: function (obj) {
    console.log(obj.lfuiScript.trim())
    return `<LfuiWrapper script="${obj.lfuiScript.replace(/"/g, "'")}">\n\n${
      obj.lfuiCode
    }\n</LfuiWrapper>`
  },
}
export default LfuiWidget
