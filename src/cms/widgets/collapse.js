import Immutable from 'immutable';

const Collapse = {
  id: "collage",
  // Visible label
  label: "Collage",
  // Fields the user need to fill out when adding an instance of the component
  fields: [{
    name: 'images',
    label: 'Images',
    widget: 'list',
    default: [{ image: '', text: ''}],
    fields: [
      {label: 'Image', name: 'image', widget: 'image'},
      {label: 'Text', name: 'text', widget: 'string'}
    ]
  }],
  // Pattern to identify a block as being an instance of this component
  pattern: /^<rehype-image (\S+)"><\/rehype-image>$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      id: match[1]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(list) {
    if (list.images && list.images.length > 0) {
      list.images.map((item) => (
        `<rehype-image src="../..${item.image}" text="${item.text}}"></rehype-image>`
      ))
    }
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  
}
export default Collapse

