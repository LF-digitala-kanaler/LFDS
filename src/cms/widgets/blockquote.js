import React from 'react';
import Blockquote from "../../components/Blockquote"

const Quote = {
  id: "blockquote",
  label: "Blockquote",
  fields: [
    { name: "quote", label: "Qoute", widget: "string", default: ' ' },
    { name: "cite", label: "Cite", widget: "string", required: false, default: ' '},
  ],
  pattern: /{"widget":"blockquote","quote":"(.*)","cite":"(.*)?"}/,
  fromBlock(match) {
    const quote = match[1] ? match[1].replace(/^\s+/,'') : null
    const cite = match[2] ? match[2].replace(/^\s+/,'') : null
    return {
      quote,
      cite,
    }
  },
  toBlock(obj) {
    const data = JSON.stringify({
			widget: 'blockquote',
			quote: obj.quote,
			cite: obj.cite,
    });
    return data
  },
  toPreview: function (obj) {
    return (<Blockquote text={obj.quote} author={obj.cite} />)
  }
}

export default Quote