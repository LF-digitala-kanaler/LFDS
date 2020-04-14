const AdvancedImage = {
  id: "advancedImage",
  label: "LFUI Image",
  fields: [
    { name: "image", label: "Image", widget: "image"},
    { name: "alt", label: "Alt text", widget: "string", default: "" },
    {
      name: "type",
      label: "Type",
      widget: "select",
      default: "Image__border",
      options: [
        { label: "With border", value: "Image__border" },
        { label: "With background", value: "Image__background" },
      ],
    },
    { name: "caption", label: "Caption", widget: "string", default: "" },
  ],
  pattern: /^<figure class="Image (.*)"><img src="(.*)" srcset="(.*)" alt="(.*)"><figcaption><div class="Image__caption">(.*)<\/div><\/figcaption><\/figure>/,
  fromBlock(match) {
    return {
      image: match[2],
      image2: match[2],
      alt: match[4],
      type: match[1],
      caption: match[5],
    }
  },
  toBlock(obj) {
    return `<figure class="Image ${obj.type}"><img src="${obj.image}" srcset="${obj.image2} 2x" alt="${obj.alt}"><figcaption><div class="Image__caption">${obj.caption}</div></figcaption></figure>`
  },
}

export default AdvancedImage