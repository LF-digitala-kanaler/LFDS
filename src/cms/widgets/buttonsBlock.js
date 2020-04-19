import Immutable from 'immutable';
const ButtonsBlock = {
  id: "buttonsBlock",
  label: "Buttons Block",
  pattern: /<article class='ButtonBlock'>[^]*?<\/article>/,

    fields: [{
      label: "Button Block",
      name: "buttonObject",
      widget: "object",
      fields: [{
        label: "Text",
        name: "content",
        widget: "markdown",
        editorComponents:['callout', 'advancedImage', 'code', 'code-block', 'color'],
        label: "Button",
        name: "buttons",
        widget: "list",
        fields: [{
          label: "Button text",
          name: "text",
          widget: "string",
        },
        {
          label: "Button link",
          name: "href",
          widget: "string",
        }],
      }], 
    }],
    
    fromBlock: function(match) {
      
      let matches = match[0].substring(match[0].indexOf("\n") + 1);
      console.log(matches, 'match')
      matches = matches.substring(matches.lastIndexOf("\n") + 1, -1 )

      console.log(matches, 'matches')
      const buttonArray = matches.split(/(?=<a class="Button")/g);
      console.log(buttonArray, 'array');
      const items = buttonArray.map(function(item, index) {
        console.log(item, 'item') // funkar hit
        return {
          href: item.match(/href="(.*?)"/)[1],
          text: item.match(/<span class="Button-text">(.*)<\/span>/s)[1],
        }
      });
      const obj = {
        buttons: Immutable.fromJS(items)
      }
      console.log(obj.buttons, 'obj')
      return obj;
    },


    toBlock: function(obj) {

      const items = Immutable.fromJS(obj.buttons || []).map(function(item, index) {
          return `<a class="Button" href="${item.get("href")}"><span class="Button-text">${item.get("text")}</span></a>`
      });
     

      return "<article class='ButtonBlock'>\n" + items.join("\n") + "\n</article>";
    },


}
export default ButtonsBlock



