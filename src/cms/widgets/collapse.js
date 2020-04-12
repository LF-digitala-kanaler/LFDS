const Collapse = {
  id: "collapse",
  label: "Collapse",
  fields: [
    { name: "collapse", label: "Collapse",widget: 'list', fields: [
      { name: "title", label: "Title", widget: "string" },
      { name: "content", label: "Content", widget: "markdown"},
    ]}
   
  ],
  pattern: /^<div class="Collapse"><div class="Collapse__title">(.*)<\/div><div class="Collapse__content">(.*)<\/div><\/div>/,
  fromBlock: match => {
    return {
      id: match[1]
    }
  },
  toBlock(obj) {
   
    if (obj.collapse && obj.collapse.length > 0) {
      
      return obj.collapse.map((item) => (
         `<div class="Collapse"><div class="Collapse__title">${item.title}</div><div class="Collapse__content">${item.content}</div></div>`
      ))
     
    }
  },
  toPreview: function (obj) {
    obj.collapse.map((item) => (
      `<div class="Collapse"><div class="Collapse__title">${item.title}</div><div class="Collapse__content">${item.content}</div></div>`
    ))
  }
}

export default Collapse

