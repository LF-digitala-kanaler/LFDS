const ColorWidget = {
  id:"colorWidget",
  label: "Colors",
  fields: [
    { label: 'Color', name: "color", widget: 'list', fields: [
      { name: "name", label: "Name", widget: "string", default: "" },
      { name: "rgb", label: "RGB", widget: "string", default: "" },
      { name: "hex", label: "Hex", widget: "string", default: "" },
      {
        name: "type",
        label: "Type",
        widget: "select",
        default: "none",
        options: [
          { label: "Primary", value: "Colors__item--primary" },
          { label: "Complimentary", value: "Colors__item--complimentary" },
          { label: "Special", value: "Colors__item--special" },
        ],
      },
    ]}
  ],
  pattern: /^<article class="Colors__item" style="border-color:(.*)"><div class="(.*)"><div class="Colors__background" style={background-color:"(.*)">(.*)<\/div><h3 class="Colors__title">(.*)<\/h3><p class="Colors__text"><span>RGB<\/span> (.*)<\/p><p class="Colors__text"><span>HEX<\/span> (.*)<\/p><\/div><\/article>/,
  fromBlock: match => {
    return {
      id: match[1]
    }
  },
  toBlock(obj) {
    if (obj.color && obj.color.length > 0) {
      
      const list = obj.color.map((item) => (
        `<article class="Colors__item" style="border-color:${item.hex}"><div class="${item.type}"><div class="Colors__background" style="background-color:${item.hex}"></div><h3 class="Colors__title">${item.name}</h3><p class="Colors__text"><span>RGB</span> ${item.rgb}</p><p class="Colors__text"><span>HEX</span> ${item.hex}</p></div></article>`
      ))
      return (
        `<div class="Colors">${list}</div>`
      )
    }
  },
  toPreview: function (obj) {
    obj.color.map((item) => (
      `<article class="Colors__item" style="border-color:${item.hex}"><div class="${item.type}"><div class="Colors__background" style={background-color:${item.hex}"></div><h3 class="Colors__title">${item.name}</h3><p class="Colors__text"><span>RGB</span> ${item.rgb}</p><p class="Colors__text"><span>HEX</span> ${item.hex}</p></div></article>`
    ))
  }
}

export default ColorWidget

