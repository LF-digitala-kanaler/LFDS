const Callout = {
  id: 'callout',
  label: 'Callout',
  fields: [
    { name: 'title', label: 'Title', widget: 'string' },
    {
      name: 'text',
      label: 'Text',
      widget: 'markdown',
      minimal: true,
      editorComponents: [
        'callout',
        'advancedImage',
        'code',
        'collapse',
        'code-block',
        'color',
      ],
    },
  ],
  pattern: /^<div class="Callout"><strong class="Callout__title">(.*) <\/strong><p class="Callout__text">(.*)<\/p><\/div>/,
  fromBlock(match) {
    return {
      title: match[1],
      text: match[2],
    }
  },
  toBlock(obj) {
    return `<div class="Callout"><strong class="Callout__title">${obj.title} </strong><p class="Callout__text">${obj.text}</p></div>`
  },
}

export default Callout
