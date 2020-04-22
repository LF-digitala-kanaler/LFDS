import Immutable from 'immutable';
const ButtonsBlock = {
  id: "buttonsBlock",
  label: "Buttons Block",
  pattern: /<article><div class='ButtonContent'><\/div>[^]*?<\/article>/,
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
      
     
     
      const buttonArray = match.split(/<\s*Button(.*?)\s*/);
      console.log(buttonArray, 'array')
     
      const items = buttonArray.map(function(item, index) {
        
        return {
          text: item.match(/text="(.*?)"/)[1],
          href: item.match(/href="(.*?)"/)[1],
        }
       
      });
      console.log(items, 'buttonA')
      const obj = {
        buttons: Immutable.fromJS(items),
        // content: match[1],
      }
      
      return obj;
    },


    toBlock: (obj) => {
      console.log(obj, 'obj')
      const items = Immutable.fromJS(obj.button || []).map(function(item, index) {
       
        return `<Button href="${item.get("href")}" text="${item.get("text")}"  />`
      });
      console.log(items)
      // const content = Immutable.fromJS(obj.button.content);
      // console.log(content, 'cont')

      return `<article><div class='ButtonContent'></div>${items.join("\n")}</article>`;
    },


}
export default ButtonsBlock



