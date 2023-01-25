import React from "react";

// @ts-check

/**
 * @typedef { import("@tiptap/react").Editor } Editor
 * @param {{ editor: Editor }}
 */

export default function MenuBar({ editor }) {
  if (!editor) {
    return null;
  }
  return (
    <div className="editor-menu-bar">
      {/* Bold */}
      <button
        onClick={() => {
          editor.chain().focus().toggleBold().run();
        }}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        Bold
      </button>

      {/* Image */}
      <button
        onClick={() => {
          editor
            .chain()
            .focus()
            .setImage({
              src: "https://img-getpocket.cdn.mozilla.net/404x202/filters:format(jpeg):quality(60):no_upscale():strip_exif()/https%3A%2F%2Fs3.amazonaws.com%2Fpocket-curatedcorpusapi-prod-images%2Fe71d97f7-2292-4cf5-a029-f42cbbf136b7.png",
              size: "medium",
            })
            .run();
        }}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        Image
      </button>
    </div>
  );
}
