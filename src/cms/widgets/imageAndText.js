const ImageAndText = {
  id: "imageAndText",
  label: "Image and text",
  fields: [
    { name: "content", label: "Content", widget: "markdown"},
    { name: "image", label: "Image", widget: "image"},
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
  ],
  pattern: /^<div class="ImageBlock (.*)"><div class="ImageBlock__content">(.*) <\/div><img src="(.*)" alt="" \/><\/div>/,
  fromBlock(match) {
    return {
      position: match[2],
      content: match[2],
      image: match[3],
    }
  },
  toBlock(obj) {
    return `<div class="ImageBlock ${obj.position}"><div class="ImageBlock__content">${obj.content} </div><img src="${obj.image}"  alt="" /></div>`
  },
}

export default ImageAndText