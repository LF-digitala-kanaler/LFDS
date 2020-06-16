import Immutable from 'immutable';

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
        editorComponents:['callout', 'advancedImage', 'code-block', 'color', 'imageAndText']
      }]
    }],


    fromBlock: function(match) {
      
      let matches = match[0].substring(match[0].indexOf("\n") + 1);
      matches = matches.substring(matches.lastIndexOf("\n") + 1, -1 )
      const collapseArray = matches.split(/(?=<Collapse)/);
      console.log(collapseArray)
      const items = collapseArray.map(function(item, index) {
        
        return {
          title: item.match(/title="(.*)"/)[1],
          content: item.match(/<div class="content">(.*)<\/div>/)[1],
        }
      });
      
      const obj = {
        panels: Immutable.fromJS(items)
      }
     
      return obj;
    },


    toBlock: function(obj) {
      
      const items = Immutable.fromJS(obj.panels || []).map(function(item, index) {
          return `<Collapse title="${item.get("title")}"><div class="content">\n\n${item.get("content")}\n</div></Collapse>`
      });


      return "<section>\n" + items.join("\n") + "\n</section>";
    },


}
export default CollapseWidget



