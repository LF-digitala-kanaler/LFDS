import Immutable from 'immutable'

const ButtonsBlock = {
  id: 'buttonsBlock',
  label: 'Buttons Block',
  pattern: /<div class='ButtonContent'>[^]*?<\/div>/s,
  fields: [
    {
      label: 'Button',
      name: 'buttons',
      widget: 'list',
      fields: [
        {
          label: 'Button text',
          name: 'text',
          widget: 'string',
        },
        {
          label: 'Button link',
          name: 'href',
          widget: 'string',
        },
      ],
    },
  ],

  fromBlock: function (match) {
    let matches = match[0].substring(match[0].indexOf('\n') + 1)
    matches = matches.substring(matches.lastIndexOf('\n') + 1, -1)
    const buttonArray = matches.split(
      /<div class="ButtonContent__item">(.*)<\/div>/s
    )

    const items = buttonArray.map(function (item) {
      return {
        text: item.match(/text="(.*?)"/)[1],
        href: item.match(/href="(.*?)"/)[1],
      }
    })

    const obj = {
      buttons: Immutable.fromJS(items),
    }

    return obj
  },

  toBlock: (obj) => {
    const items = Immutable.fromJS(obj.buttons || []).map(function (
      item
    ) {
      return `<div class="ButtonContent__item"><a class="button">href="${item.get(
        'href'
      )}">${item.get('text')}</a></div>`
    })

    // const content = Immutable.fromJS(obj.button.content);

    return `<div class='ButtonContent'>${items.join('\n')}</div>`
  },
}
export default ButtonsBlock
