import Immutable from 'immutable';
const ButtonsBlock = {
  id: "buttonsBlock",
  label: "Buttons Block",
  pattern: /<article>[^]*?<\/article>/,

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
    }],
    
    fromBlock: function(match) {
      console.log(match)
      let matches = match[0].substring(match[0].indexOf("\n") + 1);
      matches = matches.substring(matches.lastIndexOf("\n") + 1, -1 )
      const buttonArray = matches.split(/(?=<Button)/g);
      // console.log(buttonArray, 'array')
      const items = buttonArray.map(function(item, index) {
        // console.log(item, 'items')
        return {
          // content: item.match(/<span class="ButtonContent">(.*)<\/span>/)[1],
          text: item.match(/text="(.*)"/)[1],
          href: item.match(/href="(.*)"/)[1],
          
        }
       
      });
      const obj = {
        button: Immutable.fromJS(items)
      }
      
      return obj;
    },


    toBlock: function(obj) {
      // console.log(obj)
      const items = Immutable.fromJS(obj.buttons || []).map(function(item, index) {
        return `<Button href="${item.get("href")}" text="${item.get("text")}"  />`
      });
      // console.log(items)

      return "<article>\n"  + items.join("\n") + "\n</article>";
    },


}
export default ButtonsBlock



