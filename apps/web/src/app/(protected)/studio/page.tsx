"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Sidebar from "@/components/tiptap/Sidebar";
import WritingEditor from "@/components/tiptap/WritingEditor";

interface Document {
  id: string;
  title: string;
  type: "novel" | "screenplay";
  content: string;
  created: string;
  lastEdited: string;
}

export default function Studio() {
  // Use ref to track initialization state
  const initRef = useRef(false);

  const [editorMode, setEditorMode] = useState<"novel" | "screenplay">("novel");
  const [documents, setDocuments] = useLocalStorage<Document[]>(
    "writing-documents",
    []
  );
  const [currentDocId, setCurrentDocId] = useLocalStorage<string | null>(
    "current-doc-id",
    null
  );

  const getCurrentDocument = useCallback(() => {
    return documents.find((doc) => doc.id === currentDocId) || null;
  }, [documents, currentDocId]);

  const saveDocument = useCallback(
    (content: string): void => {
      if (!currentDocId) return;

      setDocuments((prevDocs) =>
        prevDocs.map((doc) =>
          doc.id === currentDocId
            ? { ...doc, content, lastEdited: new Date().toISOString() }
            : doc
        )
      );
    },
    [currentDocId, setDocuments]
  );

  const createNewDocument = useCallback(
    (title: string, type: "novel" | "screenplay"): Document => {
      const newDoc: Document = {
        id: `doc-${Date.now()}`,
        title: title || "Untitled",
        type: type || editorMode,
        content: "",
        created: new Date().toISOString(),
        lastEdited: new Date().toISOString(),
      };

      setDocuments((prevDocs) => [...prevDocs, newDoc]);
      setCurrentDocId(newDoc.id);
      return newDoc;
    },
    [editorMode, setDocuments, setCurrentDocId]
  );

  const deleteDocument = useCallback(
    (id: string) => {
      if (documents.length <= 1) {
        return; // Don't delete the last document
      }

      // Find a new document to select if we're deleting the current one
      let newCurrentId = currentDocId;
      if (currentDocId === id) {
        const otherDoc = documents.find((doc) => doc.id !== id);
        newCurrentId = otherDoc ? otherDoc.id : null;
      }

      // Update documents first
      setDocuments((prevDocs) => prevDocs.filter((doc) => doc.id !== id));

      // Then update the current document ID if needed
      if (currentDocId === id) {
        setCurrentDocId(newCurrentId);
      }
    },
    [documents, currentDocId, setDocuments, setCurrentDocId]
  );

  // One-time initialization using ref
  useEffect(() => {
    if (!initRef.current) {
      // Only initialize if we don't have documents yet
      if (documents.length === 0) {
        const newId = `doc-${Date.now()}`;
        const welcomeDoc: Document = {
          id: newId,
          title: "Welcome to your writing space",
          type: "novel",
          content: "",
          created: new Date().toISOString(),
          lastEdited: new Date().toISOString(),
        };

        // Direct initialization to avoid re-renders
        setDocuments([welcomeDoc]);
        setCurrentDocId(newId);
      } else if (!currentDocId && documents.length > 0) {
        // If we have documents but no current selection, select the first one
        setCurrentDocId(documents[0].id);
      }

      // Mark as initialized
      initRef.current = true;
    }
  }, [currentDocId, documents, setCurrentDocId, setDocuments]); // Empty dependency array - run only once

  return (
    <React.Fragment>
      <main className="flex min-h-screen flex-col md:flex-row bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
        <Sidebar
          documents={documents}
          currentDocId={currentDocId || ""}
          setCurrentDocId={setCurrentDocId}
          createNewDocument={createNewDocument}
          deleteDocument={deleteDocument}
          editorMode={editorMode}
          setEditorMode={setEditorMode}
        />

        <div className="flex-1 p-4">
          <WritingEditor
            initialContent={getCurrentDocument()?.content || ""}
            onUpdate={saveDocument}
            editorMode={editorMode}
            document={getCurrentDocument() || { id: "" }}
          />
        </div>
      </main>
    </React.Fragment>
  );
}
