import React from "react";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import CustomImage from "./Extensions/CustomImage";
import MenuBar from "./MenuBar";
import CustomBubbleMenu from "./CustomBubbleMenu";

import "./style.scss";

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CustomImage.configure({
        HTMLAttributes: {
          class: "custom-image",
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right", "justify"],
      }),
    ],
    content: "<h1>Write a heading...</h1>",
  });
  return (
    <div className="editor">
      <CustomBubbleMenu editor={editor} />
      <MenuBar editor={editor} />
      <div className="document-area">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
