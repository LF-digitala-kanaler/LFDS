const ImageAndText = {
  id: "imageAndText",
  label: "Two columns",
  fields: [
    { name: "content", label: "Content", widget: "markdown"},
    {
      name: "position",
      label: "Position",
      widget: "select",
      default: "ImageBlock__left",
      options: [
        { label: "Image to the left", value: "ImageBlock__left" },
        { label: "Image ot the right", value: "ImageBlock__right" }
      ],
    },
    { name: "image", label: "Image", widget: "image"},
  ],
  pattern: /^<div class="ImageBlock (.*)"><div class="ImageBlock__content">\n\n(.*)<\/div><div class="ImageBlock__object"><img class="ImageBlock__image" src="(.*)" alt="" \/><\/div><\/div>/s,
  fromBlock(match) {
    return {
      position: match[1],
      content: match[2],
      image: match[3],
    }
  },
  toBlock(obj) {
    return `<div class="ImageBlock ${obj.position}"><div class="ImageBlock__content">\n\n${obj.content}</div><div class="ImageBlock__object"><img class="ImageBlock__image" src="${obj.image}" alt="" /></div></div>`
  },
}

export default ImageAndText