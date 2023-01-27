import React from "react";
import { BubbleMenu } from "@tiptap/react";
import { TextBold, TextItalic, TextStrikethrough } from "@carbon/icons-react";

// @ts-check

/**
 * @typedef { import("@tiptap/react").Editor } Editor
 * @param {{ editor: Editor }}
 */

export default function CustomBubbleMenu({ editor }) {
  return (
    <div>
      {editor && (
        <BubbleMenu
          className="editor-bubble-menu"
          editor={editor}
          tippyOptions={{ duration: 100 }}
        >
          {editor.can().chain().focus().setBold().run() && (
            <div className="editor-font-formatting-group">
              {/* Bold */}
              <button
                onClick={() => {
                  editor.chain().focus().toggleBold().run();
                }}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={
                  (editor.isActive("bold") ? "is-active" : "") +
                  " editor-button-24px"
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
          )}
          {editor.isActive("custom-image") && (
            <div className="bubble-image">
              {/* Size */}
              <select
                name="image-size"
                id="bubble-image-size"
                className="editor-menu-select"
                onChange={(e) => {
                  editor.chain().focus().setSize(e.target.value).run();
                }}
                defaultValue={editor.getAttributes("custom-image").size}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
          )}
        </BubbleMenu>
      )}
    </div>
  );
}
