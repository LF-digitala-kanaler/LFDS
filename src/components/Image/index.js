import React from 'react';

const imageWithBackground = {
  label: 'Image with Background',
  id: 'imageWithBackground',
  fromBlock: match =>
    match && {
      image: match[2],
      alt: match[1],
      title: match[4],
    },
  toBlock: ({ alt, image, title }) =>
    `![${alt || ''}](${image || ''}${title ? ` "${title.replace(/"/g, '\\"')}"` : ''})`,
  // eslint-disable-next-line react/display-name
  toPreview: async ({ alt, image, title }, getAsset) => {
    const src = await getAsset(image);
    return <img src={src || ''} alt={alt || ''} title={title || ''} />;
  },
  pattern: /^!\[(.*)\]\((.*?)(\s"(.*)")?\)$/,
  fields: [
    {
      label: 'Image aa',
      name: 'image aa',
      widget: 'image',
      media_library: {
        allow_multiple: false,
      },
    },
    {
      label: 'Alt Text',
      name: 'alt',
    },
    {
      label: 'Title',
      name: 'title',
    },
  ],
};

export const NetlifyCmsEditorComponentImage = imageWithBackground;
export default imageWithBackground;