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
          { label: "Primary", value: "Colors__primary" },
          { label: "Complimentary", value: "Colors__complimentary" },
          { label: "Special", value: "Colors_special" },
        ],
      },
    ]}
  ],
  pattern: /^<article class="Colors__item (.*)"><div class="Colors__background" style={background-color:"${item.hex}">(.*)<\/div><h3>(.*)<\/h3><p>RGB (.*)<\/p><p>HEX (.*)<\/p><\/article>/,
  fromBlock: match => {
    return {
      id: match[1]
    }
  },
  toBlock(obj) {
    console.log(obj)
    if (obj.color && obj.color.length > 0) {
      
      const list = obj.color.map((item) => (
        `<article class="Colors__item ${item.type}"><div class="Colors__background" style="background-color:${item.hex}"></div><h3>${item.name}</h3><p>RGB ${item.rgb}</p><p>HEX ${item.hex}</p></article>`
      ))
      return (
        `<div class="Colors">${list}</div>`
      )
    }
  },
  toPreview: function (obj) {
    obj.color.map((item) => (
      `<article class="Colors__item ${item.type}"><div class="Colors__background" style={background-color:${item.hex}"></div><h3>${item.name}</h3><p>RGB ${item.rgb}</p><p>HEX ${item.hex}</p></article>`
    ))
  }
}

export default ColorWidget

