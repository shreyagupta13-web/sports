"use client";

import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";

export function NewsEditor() {
  const [html, setHtml] = useState("");
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Write the SG Sports announcement here.</p>",
    onUpdate: ({ editor }: { editor: Editor }) => {
      setHtml(editor.getHTML());
    },
  });

  return (
    <div className="rounded-3xl border border-border bg-bg-secondary/70 p-6">
      <div className="mb-4 text-xs uppercase tracking-[0.3em] text-text-secondary">
        Rich Text Editor
      </div>
      <EditorContent editor={editor} className="richtext" />
      <button
        type="button"
        className="mt-4 rounded-full bg-accent-lime px-4 py-2 text-xs font-semibold text-black"
      >
        Save Draft
      </button>
      <p className="mt-3 text-xs text-text-secondary">HTML length: {html.length}</p>
    </div>
  );
}
