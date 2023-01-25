import React from "react";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
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
    ],
    content: "<h1>Write a heading...</h1>",
  });
  return (
    <div className="editor">
      <CustomBubbleMenu editor={editor} />
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
