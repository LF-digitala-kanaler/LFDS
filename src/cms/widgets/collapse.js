import Immutable from 'immutable';

const Collapse = {
  id: "collapse",
  label: "Collapse",
   
    pattern: '<div>[^]*?</div>',
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
      console.log(match)
      const items = match[0].match(/[^\r\n]+/g).slice(1, -1).map(function(item, index) {
       
        return {
          title: item.match(/<p class="title">"(.*?)"<\/p>/)[1],
          content: item.match(/content="(.*?)"/)[1],
        }
      });
      console.log(items, 'items')
      const obj = {
        panels: Immutable.fromJS(items)
      }
      
      return obj;
    },


    toBlock: function(obj) {

      const items = Immutable.fromJS(obj.panels || []).map(function(item, index) {
                  // return '{% include components/link.html content="' + item.get("content") + '" title="' + item.get("title") +'" %}'
      
          return '<Collapse content="' + item.get("content") + '"><p class="title">'+ item.get("title") +'</p></Collapse>'
      });

      return "<div>\n" + items.join("\n") + "\n</div>";
    },


      toPreview: function(obj) {

        const items = Immutable.fromJS(obj.panels || []).map(function(item, index) {
            return '<div>' + item.get("content") + item.get("title") +'</div>'
        });

        return (
          '<div>' + items.join("") + '</div>'
        );
      }

}
export default Collapse



