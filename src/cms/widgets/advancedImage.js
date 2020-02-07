const AdvancedImage = {
  id: "advancedImage",
  label: "Advanced Image",
  fields: [
    { name: "image", label: "Image", widget: "image" },
    { name: "alt", label: "Alt text", widget: "string", default: "" },
    {
      name: "type",
      label: "Type",
      widget: "select",
      default: "none",
      options: [
        { label: "None", value: "none" },
        { label: "Background", value: "Image--background" },
      ],
    },
    { name: "caption", label: "Caption", widget: "string", default: "" },
  ],
  pattern: /^<figure class="Image (.*)"><img src="(.*)" alt="(.*)"><figcaption><div class="Image__caption">(.*)<\/div><div class="Image__credit">(.*)<\/div><\/figcaption><\/figure>/,
  fromBlock(match) {
    return {
      image: match[2],
      alt: match[3],
      type: match[1],
      caption: match[4],
    }
  },
  toBlock(obj) {
    return `<figure class="Image ${obj.type}"><img src="${obj.image}" alt="${obj.alt}"><figcaption><div class="Image__caption">${obj.caption}</div></figcaption></figure>`
  },
}

export default AdvancedImage