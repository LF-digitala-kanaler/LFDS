const LFDSImage = {
  id: 'LFDSImage',
  label: 'Image',
  fields: [
    { name: 'image', label: 'Image', widget: 'image' },
    { name: 'alt', label: 'Alt text', widget: 'string', default: '' },
    {
      name: 'type',
      label: 'Type',
      widget: 'select',
      default: 'Image__default',
      options: [
        { label: 'Border', value: 'Image__border' },
        { label: 'Background', value: 'Image__background' },
        {
          label: 'No added style',
          value: 'Image__default',
        },
      ],
    },
    {label: "Wide", name: "wide", widget: "boolean", default: false, hint: 'Image will break grid and use full width', required: false},
    { name: 'caption', label: 'Caption', widget: 'string', default: '' },
  ],
  pattern: /^<figure class="Image (.*) (.*)"><img src="(.*)" srcset="(.*) 2x" alt="(.*)"><figcaption><div class="Image__caption">(.*)<\/div><\/figcaption><\/figure>/,
  fromBlock(match) {
    
    return {
      image: match[3],
      alt: match[5],
      type: match[1],
      caption: match[6],
      wide: match[2]
    }
  },
  toBlock(obj) {
    let wide = obj.wide;
    if( wide === true) {
      wide = 'Image__wide'
    }else {
      wide = ''
    }
    return `<figure class="Image ${obj.type} ${wide}"><img src="${obj.image}" srcset="${obj.image} 2x" alt="${obj.alt}"><figcaption><div class="Image__caption">${obj.caption}</div></figcaption></figure>`
  },
}

export default LFDSImage
