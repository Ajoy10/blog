import React from "react";

import {
  ImageReference,
  TextAlignCenter,
  TextAlignJustify,
  TextAlignLeft,
  TextAlignRight,
  TextBold,
  TextItalic,
  TextStrikethrough,
} from "@carbon/icons-react";
import NiceModal from "@ebay/nice-modal-react";
import ImageInsertPopup from "../ImageInsertPopup/ImageInsertPopup";

// @ts-check

/**
 * @typedef { import("@tiptap/react").Editor } Editor
 * @param {{ editor: Editor }}
 */

export default function MenuBar({ editor }) {
  if (!editor) {
    return null;
  }

  const onImageInsertHandler = (urls) => {
    urls.forEach((url) => {
      editor
        .chain()
        .focus()
        .setImage({
          src: url,
          size: "medium",
        })
        .run();
    });
  };

  return (
    <div className="editor-menu-bar">
      <div className="editor-font-formatting-group">
        {/* Bold */}
        <button
          onClick={() => {
            editor.chain().focus().toggleBold().run();
          }}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={
            (editor.isActive("bold") ? "is-active" : "") + " editor-button-24px"
          }
          id="bold-button"
        >
          <TextBold aria-label="Bold" />
        </button>

        {/* Italic */}
        <button
          onClick={() => {
            editor.chain().focus().toggleItalic().run();
          }}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={
            (editor.isActive("italic") ? "is-active" : "") +
            " editor-button-24px"
          }
          id="italic-button"
        >
          <TextItalic aria-label="Italic" />
        </button>

        {/* Strike */}
        <button
          onClick={() => {
            editor.chain().focus().toggleStrike().run();
          }}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={
            (editor.isActive("strike") ? "is-active" : "") +
            " editor-button-24px"
          }
          id="strike-button"
        >
          <TextStrikethrough aria-label="Strikethrough" />
        </button>
      </div>
      <div className="editor-align-group">
        {/* Left */}
        <button
          onClick={() => {
            editor.chain().focus().setTextAlign("left").run();
          }}
          disabled={!editor.can().chain().focus().setTextAlign("left").run()}
          className={
            (editor.isActive({ textAlign: "left" }) ? "is-active" : "") +
            " editor-button-24px"
          }
          id="left-align-button"
        >
          <TextAlignLeft aria-label="Left align" />
        </button>

        {/* Center */}
        <button
          onClick={() => {
            editor.chain().focus().setTextAlign("center").run();
          }}
          disabled={!editor.can().chain().focus().setTextAlign("center").run()}
          className={
            (editor.isActive({ textAlign: "center" }) ? "is-active" : "") +
            " editor-button-24px"
          }
          id="center-align-button"
        >
          <TextAlignCenter aria-label="Center align" />
        </button>

        {/* right */}
        <button
          onClick={() => {
            editor.chain().focus().setTextAlign("right").run();
          }}
          disabled={!editor.can().chain().focus().setTextAlign("right").run()}
          className={
            (editor.isActive({ textAlign: "right" }) ? "is-active" : "") +
            " editor-button-24px"
          }
          id="right-align-button"
        >
          <TextAlignRight aria-label="Right align" />
        </button>

        {/* justify */}
        <button
          onClick={() => {
            editor.chain().focus().setTextAlign("justify").run();
          }}
          disabled={!editor.can().chain().focus().setTextAlign("justify").run()}
          className={
            (editor.isActive({ textAlign: "justify" }) ? "is-active" : "") +
            " editor-button-24px"
          }
          id="justify-align-button"
        >
          <TextAlignJustify aria-label="Justify align" />
        </button>
      </div>

      {/* Image */}
      <button
        onClick={() => {
          // editor
          //   .chain()
          //   .focus()
          //   .setImage({
          //     src: "https://img-getpocket.cdn.mozilla.net/404x202/filters:format(jpeg):quality(60):no_upscale():strip_exif()/https%3A%2F%2Fs3.amazonaws.com%2Fpocket-curatedcorpusapi-prod-images%2Fe71d97f7-2292-4cf5-a029-f42cbbf136b7.png",
          //     size: "medium",
          //   })
          //   .run();

          NiceModal.show(ImageInsertPopup, {
            onInsert: onImageInsertHandler,
          });
        }}
        className="editor-button"
      >
        <ImageReference aria-label="Insert image" />
      </button>
    </div>
  );
}
