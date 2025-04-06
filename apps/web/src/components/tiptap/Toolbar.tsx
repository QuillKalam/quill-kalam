import React from "react";
import { Button } from "../ui/button";
import { Editor } from "@tiptap/core";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Heading1,
  Heading2,
  Quote,
  List,
  ListOrdered,
  Image as ImageIcon,
  Link as LinkIcon,
  Undo,
  Redo,
  Settings,
  Download,
} from "lucide-react";

const Toolbar = ({
  editor,
  setShowFormatPanel,
  editorMode,
}: {
  editor: Editor;
  setShowFormatPanel: (value: boolean) => void;
  editorMode: string;
}) => {
  if (!editor) return null;

  const addImage = () => {
    const url = window.prompt("Enter image URL");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("Enter URL", previousUrl);

    if (url === null) {
      return;
    }

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const exportDocument = () => {
    const content = editor.getHTML();
    const blob = new Blob([content], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "document.html";
    a.click();

    URL.revokeObjectURL(url);
  };

  // Render different toolbars based on editor mode
  return (
    <React.Fragment>
      <div className="flex items-center gap-1 p-2 border-b border-slate-200 dark:border-slate-700 flex-wrap">
        {/* Common controls */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
        >
          <Undo className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
        >
          <Redo className="h-4 w-4" />
        </Button>

        <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-1" />

        {/* Format controls */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={
            editor.isActive("bold") ? "bg-slate-200 dark:bg-slate-700" : ""
          }
        >
          <Bold className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={
            editor.isActive("italic") ? "bg-slate-200 dark:bg-slate-700" : ""
          }
        >
          <Italic className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={
            editor.isActive("underline") ? "bg-slate-200 dark:bg-slate-700" : ""
          }
        >
          <Underline className="h-4 w-4" />
        </Button>

        {editorMode === "novel" && (
          <>
            <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-1" />

            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={
                editor.isActive("heading", { level: 1 })
                  ? "bg-slate-200 dark:bg-slate-700"
                  : ""
              }
            >
              <Heading1 className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={
                editor.isActive("heading", { level: 2 })
                  ? "bg-slate-200 dark:bg-slate-700"
                  : ""
              }
            >
              <Heading2 className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={
                editor.isActive("blockquote")
                  ? "bg-slate-200 dark:bg-slate-700"
                  : ""
              }
            >
              <Quote className="h-4 w-4" />
            </Button>
          </>
        )}

        <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-1" />

        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={
            editor.isActive("bulletList")
              ? "bg-slate-200 dark:bg-slate-700"
              : ""
          }
        >
          <List className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive("orderedList")
              ? "bg-slate-200 dark:bg-slate-700"
              : ""
          }
        >
          <ListOrdered className="h-4 w-4" />
        </Button>

        <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-1" />

        {editorMode === "novel" && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
              className={
                editor.isActive({ textAlign: "left" })
                  ? "bg-slate-200 dark:bg-slate-700"
                  : ""
              }
            >
              <AlignLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                editor.chain().focus().setTextAlign("center").run()
              }
              className={
                editor.isActive({ textAlign: "center" })
                  ? "bg-slate-200 dark:bg-slate-700"
                  : ""
              }
            >
              <AlignCenter className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
              className={
                editor.isActive({ textAlign: "right" })
                  ? "bg-slate-200 dark:bg-slate-700"
                  : ""
              }
            >
              <AlignRight className="h-4 w-4" />
            </Button>

            <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-1" />
          </>
        )}

        <Button variant="ghost" size="icon" onClick={addImage}>
          <ImageIcon className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={setLink}
          className={
            editor.isActive("link") ? "bg-slate-200 dark:bg-slate-700" : ""
          }
        >
          <LinkIcon className="h-4 w-4" />
        </Button>

        <div className="flex-1" />

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowFormatPanel(!editorMode)}
        >
          <Settings className="h-4 w-4" />
        </Button>

        <Button variant="ghost" size="icon" onClick={exportDocument}>
          <Download className="h-4 w-4" />
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Toolbar;
