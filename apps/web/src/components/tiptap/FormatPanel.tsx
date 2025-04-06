import React from "react";
import { X } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";

interface FormatPanelProps {
  editor: any; // Replace 'any' with the specific type if available
  editorMode: "novel" | "screenplay"; // Adjust the union type based on your use case
  onClose: () => void;
}

const FormatPanel: React.FC<FormatPanelProps> = ({
  editor,
  editorMode,
  onClose,
}) => {
  const fontFamilies = [
    { name: "Serif", value: "Georgia, serif" },
    { name: "Sans-serif", value: "Arial, sans-serif" },
    { name: "Monospace", value: "Courier New, monospace" },
  ];

  const fontSizes = [
    { name: "Small", value: "0.875em" },
    { name: "Normal", value: "1em" },
    { name: "Large", value: "1.25em" },
    { name: "X-Large", value: "1.5em" },
  ];

  const lineHeights = [
    { name: "Normal", value: "1.5" },
    { name: "Relaxed", value: "1.75" },
    { name: "Loose", value: "2" },
    { name: "Very Loose", value: "2.5" },
  ];

  // Screenplay specific settings
  const sceneHeadings = ["INT.", "EXT.", "INT./EXT.", "I/E"];

  const transitions = [
    "CUT TO:",
    "FADE IN:",
    "FADE OUT",
    "DISSOLVE TO:",
    "SMASH CUT TO:",
    "MATCH CUT TO:",
  ];

  const insertScreenplayElement = (
    type:
      | "scene-heading"
      | "action"
      | "character"
      | "dialogue"
      | "parenthetical"
      | "transition"
  ) => {
    if (type === "scene-heading") {
      editor.chain().focus().setHeading({ level: 3 }).run();
    } else if (type === "action") {
      editor.chain().focus().setParagraph().run();
    } else if (type === "character") {
      editor.chain().focus().setHeading({ level: 4 }).run();
    } else if (type === "dialogue") {
      editor.chain().focus().setParagraph().setTextAlign("center").run();
    } else if (type === "parenthetical") {
      editor.chain().focus().setParagraph().setTextAlign("center").run();
      editor.chain().focus().insertContent("(").run();
    } else if (type === "transition") {
      editor
        .chain()
        .focus()
        .setHeading({ level: 5 })
        .setTextAlign("right")
        .run();
    }
  };

  const insertSceneHeading = (heading: string): void => {
    editor
      .chain()
      .focus()
      .setHeading({ level: 3 })
      .insertContent(heading + " ")
      .run();
  };

  const insertTransition = (transition: string): void => {
    editor
      .chain()
      .focus()
      .setHeading({ level: 5 })
      .setTextAlign("right")
      .insertContent(transition)
      .run();
  };

  return (
    <React.Fragment>
      <div className="w-72 border-r border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">Format Options</h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {editorMode === "novel" ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Font Family</Label>
              <div className="flex flex-col gap-1">
                {fontFamilies.map((font) => (
                  <Button
                    key={font.name}
                    variant="outline"
                    className="justify-start"
                    onClick={() => {
                      editor.chain().focus().setFontFamily(font.value).run();
                    }}
                  >
                    <span style={{ fontFamily: font.value }}>{font.name}</span>
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Font Size</Label>
              <div className="flex flex-col gap-1">
                {fontSizes.map((size) => (
                  <Button
                    key={size.name}
                    variant="outline"
                    className="justify-start"
                    onClick={() => {
                      editor.chain().focus().setFontSize(size.value).run();
                    }}
                  >
                    <span style={{ fontSize: size.value }}>{size.name}</span>
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Line Spacing</Label>
              <div className="flex flex-col gap-1">
                {lineHeights.map((height) => (
                  <Button
                    key={height.name}
                    variant="outline"
                    className="justify-start"
                    onClick={() => {
                      editor.chain().focus().setLineHeight(height.value).run();
                    }}
                  >
                    {height.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Text Color</Label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  "#000000",
                  "#FF0000",
                  "#0000FF",
                  "#008000",
                  "#FFA500",
                  "#800080",
                  "#A52A2A",
                  "#808080",
                ].map((color) => (
                  <Button
                    key={color}
                    variant="outline"
                    className="w-10 h-10 p-0"
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      editor.chain().focus().setColor(color).run();
                    }}
                  >
                    <span className="sr-only">{color}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Screenplay format options
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Element Type</Label>
              <div className="flex flex-col gap-1">
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => insertScreenplayElement("scene-heading")}
                >
                  Scene Heading
                </Button>
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => insertScreenplayElement("action")}
                >
                  Action
                </Button>
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => insertScreenplayElement("character")}
                >
                  Character
                </Button>
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => insertScreenplayElement("dialogue")}
                >
                  Dialogue
                </Button>
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => insertScreenplayElement("parenthetical")}
                >
                  Parenthetical
                </Button>
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => insertScreenplayElement("transition")}
                >
                  Transition
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Common Scene Headings</Label>
              <div className="flex flex-col gap-1">
                {sceneHeadings.map((heading) => (
                  <Button
                    key={heading}
                    variant="outline"
                    className="justify-start"
                    onClick={() => insertSceneHeading(heading)}
                  >
                    {heading}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Transitions</Label>
              <div className="flex flex-col gap-1">
                {transitions.map((transition) => (
                  <Button
                    key={transition}
                    variant="outline"
                    className="justify-start"
                    onClick={() => insertTransition(transition)}
                  >
                    {transition}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default FormatPanel;
