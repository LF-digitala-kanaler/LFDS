import Immutable from 'immutable';
const ButtonsBlock = {
  id: "buttonsBlock",
  label: "Buttons Block",
  pattern: /<article>[^]*?<\/article>/,

    fields: [{
      label: "Button Block", name: "button", widget: "object",
      fields: [
        // {label: "Text", name: "content", widget: "markdown", editorComponents:['callout', 'advancedImage', 'code', 'code-block', 'color']},
        {
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
      matches = matches.substring(matches.lastIndexOf("\n") + 1, -1 )
      console.log(matches, 'matches')
      const buttonArray = matches.split(/(?=<Button)/);
      console.log(buttonArray, 'array')
      const items = buttonArray.map(function(item, index) {
        return {
          // content: item.match(/<span class="ButtonContent">(.*)<\/span>/)[1],
          href: item.match(/href="(.*?)"/)[1],
          text: item.match(/text="(.*?)"/)[1],
        }
       
      });
      const obj = {
        buttons: Immutable.fromJS(items)
      }
      
      return obj;
    },


    toBlock: function(obj) {
      
      const items = Immutable.fromJS(obj.buttons || []).map(function(item, index) {
          return `<Button href="${item.get("href")}" text="${item.get("text")}" />`

      });
      console.log(items)

      return "<article>\n"  + items.join("\n") + "\n</article>";
    },


}
export default ButtonsBlock



