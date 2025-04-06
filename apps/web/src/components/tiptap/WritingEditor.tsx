"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Typography from "@tiptap/extension-typography";
import Document from "@tiptap/extension-document";
import Toolbar from "./Toolbar";
import FormatPanel from "./FormatPanel";
import StatusBar from "./StatusBar";
import WordCountWidget from "./WordCountWidget";
import { debounce } from "lodash";
import ChapterExtension from "@/extensions/ChapterExtension";
import ScreenplayExtension from "@/extensions/ScreenplayExtension";

interface WritingEditorProps {
  initialContent: string;
  onUpdate: (content: string) => void;
  editorMode: "novel" | "screenplay";
  document: { id: string };
}

const WritingEditor: React.FC<WritingEditorProps> = ({
  initialContent,
  onUpdate,
  editorMode,
  document,
}) => {
  const [showFormatPanel, setShowFormatPanel] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [wordCountGoal, setWordCountGoal] = useState(0);
  const [autoSaveStatus, setAutoSaveStatus] = useState("Saved");

  // Configure editor based on mode (novel or screenplay)
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        document: false,
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
        history: {
          depth: 100,
          newGroupDelay: 500,
        },
      }),
      // Use custom document based on writing mode
      editorMode === "novel" ? ChapterExtension : ScreenplayExtension,
      Placeholder.configure({
        placeholder:
          editorMode === "novel" ? "Begin your story..." : "FADE IN:",
      }),
      CharacterCount,
      Highlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
      TextStyle,
      Color,
      Typography,
    ],
    content: initialContent,
    autofocus: "end",
    onUpdate: ({ editor }) => {
      const content = editor.getHTML();
      const wordCountMatch = content.match(/\S+/g);
      setWordCount(wordCountMatch ? wordCountMatch.length : 0);

      debouncedSave(content);
      setAutoSaveStatus("Saving...");
    },
  });

  // Debounced save function
  const debouncedSave = useCallback(
    debounce((content) => {
      onUpdate(content);
      setAutoSaveStatus("Saved");
    }, 1000),
    [onUpdate]
  );

  // Reset editor content when switching documents
  useEffect(() => {
    if (editor && initialContent !== undefined) {
      editor.commands.setContent(initialContent);
    }
  }, [initialContent, editor, document?.id]);

  // Set default word count goal based on writing mode
  useEffect(() => {
    if (editorMode === "novel") {
      setWordCountGoal(2000); // Daily novel writing goal
    } else {
      setWordCountGoal(120); // Pages for screenplay (120 pages ~ 2 hours of film)
    }
  }, [editorMode]);

  if (!editor) {
    return (
      <React.Fragment>
        <div className="flex items-center justify-center h-96">
          Loading editor...
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className="flex flex-col h-full bg-white dark:bg-slate-800 rounded-lg shadow-lg">
        <Toolbar
          editor={editor}
          setShowFormatPanel={setShowFormatPanel}
          editorMode={editorMode}
        />

        <div className="flex flex-1 overflow-hidden">
          {showFormatPanel && (
            <FormatPanel
              editor={editor}
              editorMode={editorMode}
              onClose={() => setShowFormatPanel(false)}
            />
          )}

          <div className="flex-1 overflow-auto p-4 md:p-8 max-w-3xl mx-auto w-full">
            <EditorContent
              editor={editor}
              className={`prose prose-lg max-w-none dark:prose-invert h-full min-h-[60vh] focus:outline-none ${
                editorMode === "screenplay" ? "font-mono" : "font-serif"
              }`}
            />
          </div>
        </div>

        <StatusBar>
          <WordCountWidget
            current={wordCount}
            goal={wordCountGoal}
            setGoal={setWordCountGoal}
            mode={editorMode}
          />
          <div className="text-sm text-slate-500">{autoSaveStatus}</div>
        </StatusBar>
      </div>
    </React.Fragment>
  );
};

export default WritingEditor;
