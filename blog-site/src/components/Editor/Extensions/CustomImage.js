import Image from "@tiptap/extension-image";
import { mergeAttributes } from "@tiptap/react";

export default Image.extend({
  name: "custom-image",
  addOptions() {
    return {
      sizes: ["small", "medium", "large"],
    };
  },
  addAttributes() {
    return {
      ...Image.config.addAttributes(),
      size: "medium",
      renderd: false,
    };
  },

  addCommands() {
    return {
      ...Image.config.addCommands(),
      setImage:
        (options) =>
        ({ tr, dispatch }) => {
          const { selection } = tr;
          const node = this.type.create(options);

          if (dispatch) {
            tr.replaceRangeWith(selection.from, selection.to, node);
          }

          return true;
        },
      setSize:
        (size) =>
        ({ tr, dispatch }) => {
          if (!this.options.sizes.includes(size)) {
            console.log(size);
            return false;
          }

          const { selection } = tr;

          const options = { ...selection.node.attrs, size };

          const node = this.type.create(options);

          if (dispatch) {
            tr.replaceRangeWith(selection.from, selection.to, node);
          }
        },
    };
  },

  renderHTML({ node, HTMLAttributes }) {
    const size = node.attrs.size;
    HTMLAttributes.class = " custom-image-" + size;

    return [
      "img",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },
});
