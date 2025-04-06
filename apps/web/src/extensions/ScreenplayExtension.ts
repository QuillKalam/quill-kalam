import Document from '@tiptap/extension-document';

const ScreenplayExtension = Document.extend({
  content: 'block+',
  
  addKeyboardShortcuts() {
    return {
      // Tab key to cycle through screenplay elements
      'Tab': ({ editor }) => {
        // Get the current node type
        const { $anchor } = editor.state.selection;
        const node = $anchor.node($anchor.depth);
        
        if (node.type.name === 'paragraph') {
          // From action to character
          editor.chain().focus().setHeading({ level: 4 }).run();
          return true;
        } 
        else if (node.type.name === 'heading' && node.attrs.level === 4) {
          // From character to dialogue
          editor.chain().focus().setParagraph().updateAttributes('paragraph', { textAlign: 'center' }).run();
          return true;
        }
        else if (node.type.name === 'heading' && node.attrs.level === 3) {
          // From scene heading to action
          editor.chain().focus().setParagraph().run();
          return true;
        }
        return false;
      },
      // Enter key after dialogue goes to action
      'Enter': ({ editor }) => {
        const { $anchor } = editor.state.selection;
        const node = $anchor.node($anchor.depth);
        
        // If we're in dialogue or parenthetical (centered paragraph) and at the end
        if (node.type.name === 'paragraph' && 
            $anchor.pos === $anchor.end() && 
            node.attrs.textAlign === 'center') {
          editor.chain().focus().setParagraph().updateAttributes('paragraph', { textAlign: 'left' }).run();
          return true;
        }
        return false;
      }
    };
  }
});

export default ScreenplayExtension;