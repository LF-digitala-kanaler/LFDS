import React from 'react'
import Immutable from 'immutable';
import Collapse from '../../components/Collapse'
const CollapseWidget = {
  id: "collapse",
  label: "Collapse",
   
    pattern: /<section>[^]*?<\/section>/,
    fields: [{
      label: "Collapse",
      name: "panels",
      widget: "list",
      fields: [{
        label: "Title",
        name: "title",
        widget: "string",
      },
      {
        label: "Content",
        name: "content",
        widget: "markdown",
      }]
    }],


    fromBlock: function(match) {
      
      let matches = match[0].substring(match[0].indexOf("\n") + 1);
      matches = matches.substring(matches.lastIndexOf("\n") + 1, -1 )
      const collapseArray = matches.split(/(?=<Collapse)/g);
      console.log(collapseArray);
      const items = collapseArray.map(function(item, index) {
        console.log(item, 'item') // funkar hit
        return {
          title: item.match(/title="(.*?)"/)[1],
          content: item.match(/<span class="content">(.*?)<\/span>/)[1],
        }
      });
      console.log(items, 'ass')
      const obj = {
        panels: Immutable.fromJS(items)
      }
      console.log(obj.panels, 'obj')
      return obj;
    },


    toBlock: function(obj) {

      const items = Immutable.fromJS(obj.panels || []).map(function(item, index) {
                  // return '{% include components/link.html content="' + item.get("content") + '" title="' + item.get("title") +'" %}'
          return `<Collapse title="${item.get("title")}"><span class="content">${item.get("content")}</span></Collapse>`
      });
     

      return "<section>\n" + items.join("\n") + "\n</section>";
    },


}
export default CollapseWidget



