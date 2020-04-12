

const Quote = {
  id: "blockquote",
  label: "Blockquote",
  fields: [
    { name: "quote", label: "Qoute", widget: "string" },
    { name: "cite", label: "Cite", widget: "string", required: false},
  ],
  pattern: /^<blockquote class="Blockquote"><p>(.*)<\/p><footer class="Blockquote__author">(.*)<\/footer><\/blockquote>/,
  fromBlock(match) {
    return {
      quote: match[1],
      cite: match[2],
    }
  },
  toBlock(obj) {
    return '<blockquote class="Blockquote"><p>'+obj.quote+'</p><footer class="Blockquote__author">'+obj.cite+'</footer></blockquote>';
  },
  toPreview: function (obj) {
    return '<blockquote class="Blockquote"><p>'+obj.quote+'</p><footer class="Blockquote__author">'+obj.cite+'</footer></blockquote>';
  }
}

export default Quote