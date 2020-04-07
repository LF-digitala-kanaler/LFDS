const Collapse = {
  id: "collapse",
  label: "Collapse",
  fields: [
    { name: "title", label: "Title", widget: "markdown" },
    { name: "content", label: "Content", widget: "markdown"},
  ],
  pattern: /^<div class="Collapse"><div class="Collapse__title">(.*) <\/div><p class="Collapse__content">(.*)<\/p><\/div>/,
  fromBlock(match) {
    return {
      title: match[1],
      text: match[2],
    }
  },
  toBlock(obj) {
    return `<div class="Collapse"><div class="Collapse__title">${obj.title} </div><p class="Collapse__content">${obj.text}</p></div>`
  },
  toPreview: function (obj) {
    return `<div class="Collapse"><div class="Collapse__title">${obj.title} </div><p class="Collapse__content">${obj.text}</p></div>`
    
  }
}

export default Collapse