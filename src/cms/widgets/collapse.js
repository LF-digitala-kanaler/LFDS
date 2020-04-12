import Immutable from 'immutable';

const Collapse = {
  id: "collapse",
  label: "Collapse",
  pattern: '{% panels %}[^]*?{% endbuttons %}',
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
      const items = match[0].match(/[^\r\n]+/g).slice(1, -1).map(function(item, index) {
        console.log(item)
        return {
          title: item.match(/title="(.*?)"/)[1],
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
          return '<div class="Collapse">' + item.get("content") + '<div>' + item.get("title") +'</div></div>'
      });

      return "{% panels %}\n" + items.join("\n") + "\n{% endbuttons %}";
    },


    toPreview: function(obj) {

      const items = Immutable.fromJS(obj.panels || []).map(function(item, index) {
          return '<a href="' + item.get("content") + '" class="button">' + item.get("title") + '</a>'
      });

      return (
        '<div class="buttons">' + items.join("") + '</div>'
      );
    }

}
export default Collapse



