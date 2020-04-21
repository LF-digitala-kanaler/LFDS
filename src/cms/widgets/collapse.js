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
        editorComponents:['callout', 'advancedImage', 'code', 'collapse', 'code-block', 'color', 'ImageAndText']
      }]
    }],


    fromBlock: function(match) {
      
      let matches = match[0].substring(match[0].indexOf("\n") + 1);
      matches = matches.substring(matches.lastIndexOf("\n") + 1, -1 )
      const collapseArray = matches.split(/(?=<Collapse)/);
      console.log(collapseArray, 'array')
      const items = collapseArray.map(function(item, index) {
        
        return {
          title: item.match(/title="(.*?)"/)[1],
          content: item.match(/<div class="content">(.*)<\/div>/s)[1],
        }
      });
    
      const obj = {
        panels: Immutable.fromJS(items)
      }
      
      return obj;
    },


    toBlock: function(obj) {
      console.log(obj, 'obj')
      const items = Immutable.fromJS(obj.panels || []).map(function(item, index) {
                  // return '{% include components/link.html content="' + item.get("content") + '" title="' + item.get("title") +'" %}'
          return `<Collapse title="${item.get("title")}"><div class="content">${item.get("content")}</div></Collapse>`
      });
     console.log(items, 'items')

      return "<section>\n" + items.join("\n") + "\n</section>";
    },


}
export default CollapseWidget



