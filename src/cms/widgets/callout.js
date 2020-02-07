const Callout = {
  id: "callout",
  label: "Callout",
  fields: [
    { name: "title", label: "Title", widget: "string" },
    { name: "text", label: "Text", widget: "string"},
  ],
  pattern: /^<div class="Callout"><div class="Callout__icon"><\/div><p class="Callout__text"><strong>(.*) <\/strong>(.*)<\/p><\/div>/,
  fromBlock(match) {
    return {
      title: match[1],
      text: match[2],
    }
  },
  toBlock(obj) {
    return `<div class="Callout"><div class="Callout__icon"><\/div><p class="Callout__text"><strong>${obj.title} </strong>${obj.text}</p></div>`
  },
}

export default Callout