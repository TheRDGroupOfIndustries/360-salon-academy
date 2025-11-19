export default {
  name: "galleryItem",
  title: "Gallery Item",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Image Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    },
  ],
};
