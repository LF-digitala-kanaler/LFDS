import Immutable from 'immutable';
const ButtonsBlock = {
  id: "buttonsBlock",
  label: "Buttons Block",
  pattern: /<article>\n<div class='ButtonContent'>(.*)<\/div>[^]*?\n<\/article>/,
  fields: [{
      label: "Button Block", name: "button", widget: "object",
      fields: [
        {label: "Text", name: "content", widget: "markdown", editorComponents:['callout', 'advancedImage', 'code', 'code-block', 'color']},
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
      console.log(match[1])
      let matches = match[0].substring(match[0].indexOf("\n") + 1);
      matches = matches.substring(matches.lastIndexOf("\n") + 1, -1 );
      const buttonArray = matches.split(/(?=<Button)/);
      const items = buttonArray.map(function(item, index) {
        
        return {
          text: item.match(/text="(.*?)"/)[1],
          href: item.match(/href="(.*?)"/)[1],
          
        }
       
      });
      
      const obj = {
        content: Immutable.fromJS(match[1]),
        buttons: Immutable.fromJS(items)
      }
      
      return obj;
    },


    toBlock: (obj) => {
      console.log(obj)
      const items = Immutable.fromJS(obj.buttons || []).map(function(item, index) {
        return `<Button href="${item.get("href")}" text="${item.get("text")}"  />`
      });
       console.log(items)

      return `<article>\n<div class='ButtonContent'>${obj.content}</div>${items.join("\n")}\n</article>`;
    },


}
export default ButtonsBlock



