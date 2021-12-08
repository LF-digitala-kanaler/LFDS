import Immutable from 'immutable'

const CollapseWidget = {
  id: 'collapse',
  label: 'Collapse',

  pattern: /<section>[^]*?<\/section>/,
  fields: [
    {
      label: 'Collapse',
      name: 'panels',
      widget: 'list',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Content',
          name: 'content',
          widget: 'markdown',
          editor_components: [
            'callout',
            'LFDSImage',
            'code-block',
            'color',
            'imageAndText',
          ],
        },
      ],
    },
  ],

  fromBlock: function (match) {
    let matches = match[0].substring(match[0].indexOf('\n') + 1)
    matches = matches.substring(matches.lastIndexOf('\n') + 1, -1)
    const collapseArray = matches.split(/(?=<Collapse)/)
    const items = collapseArray.map(function (item) {
      return {
        title: item.match(/title="(.*)">/)[1],
        content: item.match(/<div class="content">(.*)<\/div>/s)[1],
      }
    })

    const obj = {
      panels: Immutable.fromJS(items),
    }

    return obj
  },

  toBlock: function (obj) {
    const items = Immutable.fromJS(obj.panels || []).map(function (item) {
      return `<Collapse title="${item.get(
        'title'
      )}">\n<div class="content">\n\n${item.get('content')}\n\n</div></Collapse>`
    })

    return '\n<section>\n' + items.join('\n') + '\n</section>\n'
  },
}
export default CollapseWidget
