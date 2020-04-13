import React from 'react';
import Blockquote from "../../components/Blockquote"

const Quote = {
  id: "blockquote",
  label: "Blockquote",
  fields: [
    { name: "text", label: "Qoute", widget: "string" },
    { name: "author", label: "Cite", widget: "string", required: false},
  ],
  pattern: /^<div class="Blockquote"><p class="Blockquote__text">(.*)<\/p><footer class="Blockquote__author">(.*)<\/footer><\/div>/,
  fromBlock: function(match) {
   
    const obj = {
      text: match[1],
      author: match[2]
    };
    return obj;
  },
  toBlock(obj) {
    return `<div class="Blockquote"><p class="Blockquote__text">${obj.text}</p><footer class="Blockquote__author">${obj.author}</footer></div>`
  },
  
}

export default Quote

