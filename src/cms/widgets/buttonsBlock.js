import Immutable from 'immutable';
const ButtonsBlock = {
  id: "buttonsBlock",
  label: "Buttons Block",
  pattern: /<article><div class='ButtonContent'>(.*)<\/div>[^]*?<\/article>/,
  fields: [{
   
    label: "Button",
    name: "button",
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
     label: "Text", name: "content", widget: "markdown", editorComponents:['callout', 'advancedImage', 'code', 'code-block', 'color'],
  }],
    
    fromBlock: function(match) {
      console.log(match[1], match[2])
      let matches = match[0].substring(match[0].indexOf("\n") + 1);
      matches = matches.substring(matches.lastIndexOf("\n") + 1, -1 )
      const buttonArray = matches.split(/(?=<Button)/);
      // console.log(buttonArray, 'array')
      
      const items = buttonArray.map(function(item, index) {
        // console.log(item, 'items')
        return {
          text: item.match(/text="(.*?)"/)[2],
          href: item.match(/href="(.*?)"/)[2],
          
        }
       
      });
      const obj = {
        content: match[1],
        button: Immutable.fromJS(items)
      }
      console.log(obj)
      return obj;
    },


    toBlock: function(obj) {
      // console.log(obj)
      const items = Immutable.fromJS(obj.button || []).map(function(item, index) {
        return `<Button href="${item.get("href")}" text="${item.get("text")}"  />`
      });
      // console.log(items)

      return "<article>\n<div class='ButtonContent'>"+ obj.content + "</div>" + items.join("\n") + "\n</article>";
    },


}
export default ButtonsBlock



