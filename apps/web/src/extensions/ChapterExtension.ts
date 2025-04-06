import Document from '@tiptap/extension-document';

const ChapterExtension = Document.extend({
  content: 'block+',
  
  addKeyboardShortcuts() {
    return {
      // Shortcut for creating a new chapter
      'Mod-Alt-1': ({ editor }) => {
        editor.chain().focus().setHeading({ level: 1 }).insertContent('Chapter ').run();
        return true;
      },
      // Shortcut for creating a subheading
      'Mod-Alt-2': ({ editor }) => {
        editor.chain().focus().setHeading({ level: 2 }).run();
        return true;
      }
    };
  }
});

export default ChapterExtension;