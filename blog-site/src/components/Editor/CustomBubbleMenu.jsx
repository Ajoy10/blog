import React from "react";
import { BubbleMenu } from "@tiptap/react";

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
            <div className="bubble-text">
              {/* Bold */}
              <button
                onClick={() => {
                  editor.chain().focus().toggleBold().run();
                }}
              >
                Bold
              </button>
            </div>
          )}
          {editor.isActive("custom-image") && (
            <div className="bubble-image">
              {/* Size */}
              <select
                name="image-size"
                id="bubble-image-size"
                onChange={(e) => {
                  editor.chain().focus().setSize(e.target.value).run();
                }}
              >
                <option
                  value="small"
                  selected={editor.isActive("custom-image", { size: "small" })}
                >
                  Small
                </option>
                <option
                  value="medium"
                  selected={editor.isActive("custom-image", { size: "medium" })}
                >
                  Medium
                </option>
                <option
                  value="large"
                  selected={editor.isActive("custom-image", { size: "large" })}
                >
                  Large
                </option>
              </select>
            </div>
          )}
        </BubbleMenu>
      )}
    </div>
  );
}
