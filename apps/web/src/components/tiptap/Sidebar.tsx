import React, { useState } from 'react';
import { 
  FilePlus, FileText, Film, Trash2, PanelLeftClose, 
  PanelLeftOpen, Book, Settings
} from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import { Button } from '../ui/button';
import { DialogHeader, DialogFooter } from '../ui/dialog';
import { Input } from '../ui/input';

interface Document {
  id: string;
  title: string;
  type: 'novel' | 'screenplay';
  lastEdited: string;
}

interface SidebarProps {
  documents: Document[];
  currentDocId: string;
  setCurrentDocId: (id: string) => void;
  createNewDocument: (title: string, type: 'novel' | 'screenplay') => void;
  deleteDocument: (id: string) => void;
  editorMode: 'novel' | 'screenplay';
  setEditorMode: (mode: 'novel' | 'screenplay') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  documents, 
  currentDocId, 
  setCurrentDocId, 
  createNewDocument, 
  deleteDocument,
  editorMode,
  setEditorMode
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [newDocDialogOpen, setNewDocDialogOpen] = useState(false);
  const [newDocTitle, setNewDocTitle] = useState('');
  const [newDocType, setNewDocType] = useState<'novel' | 'screenplay'>('novel');

  const handleCreateDoc = () => {
    createNewDocument(newDocTitle, newDocType);
    setNewDocDialogOpen(false);
    setNewDocTitle('');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  if (isCollapsed) {
    return (
      <div className="w-12 border-r border-slate-200 dark:border-slate-700 flex flex-col items-center py-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsCollapsed(false)}
          className="mb-4"
        >
          <PanelLeftOpen className="h-4 w-4" />
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setNewDocDialogOpen(true)}
        >
          <FilePlus className="h-4 w-4" />
        </Button>
        
        {/* Add mode toggle buttons */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setEditorMode('novel')}
          className={`mt-4 ${editorMode === 'novel' ? 'bg-slate-200 dark:bg-slate-700' : ''}`}
        >
          <Book className="h-4 w-4" />
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setEditorMode('screenplay')}
          className={`mt-2 ${editorMode === 'screenplay' ? 'bg-slate-200 dark:bg-slate-700' : ''}`}
        >
          <Film className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="w-64 border-r border-slate-200 dark:border-slate-700 flex flex-col h-screen">
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
          <h2 className="font-semibold text-lg">
            {editorMode === 'novel' ? 'Novel Writing' : 'Screenplay'}
          </h2>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsCollapsed(true)}
          >
            <PanelLeftClose className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2 p-4 border-b border-slate-200 dark:border-slate-700">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setEditorMode('novel')}
            className={editorMode === 'novel' ? 'bg-slate-200 dark:bg-slate-700' : ''}
          >
            <Book className="h-4 w-4 mr-2" />
            Novel
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setEditorMode('screenplay')}
            className={editorMode === 'screenplay' ? 'bg-slate-200 dark:bg-slate-700' : ''}
          >
            <Film className="h-4 w-4 mr-2" />
            Screenplay
          </Button>
        </div>
        
        <div className="flex items-center justify-between p-4">
          <h3 className="font-medium">Documents</h3>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setNewDocDialogOpen(true)}
          >
            <FilePlus className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex-1 overflow-auto">
          {documents.map(doc => (
            <div 
              key={doc.id}
              className={`p-3 cursor-pointer flex items-center justify-between ${
                currentDocId === doc.id ? 'bg-slate-200 dark:bg-slate-700' : 'hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              onClick={() => setCurrentDocId(doc.id)}
            >
              <div className="flex items-center">
                {doc.type === 'novel' ? 
                  <Book className="h-4 w-4 mr-2 text-slate-500" /> : 
                  <Film className="h-4 w-4 mr-2 text-slate-500" />
                }
                <div>
                  <div className="font-medium truncate max-w-[160px]">{doc.title}</div>
                  <div className="text-xs text-slate-500">{formatDate(doc.lastEdited)}</div>
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                size="icon"
                className="opacity-0 group-hover:opacity-100 hover:bg-red-100 hover:text-red-500"
                onClick={(e) => {
                  e.stopPropagation();
                  if (confirm('Are you sure you want to delete this document?')) {
                    deleteDocument(doc.id);
                  }
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-slate-200 dark:border-slate-700">
          <Button 
            variant="outline" 
            size="sm"
            className="w-full"
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>
      
      <Dialog open={newDocDialogOpen} onOpenChange={setNewDocDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Document</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Document Title</label>
              <Input 
                value={newDocTitle} 
                onChange={(e) => setNewDocTitle(e.target.value)}
                placeholder="Enter document title" 
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Document Type</label>
              <div className="flex gap-2">
                <Button 
                  type="button"
                  variant="outline"
                  className={newDocType === 'novel' ? 'bg-slate-200 dark:bg-slate-700' : ''}
                  onClick={() => setNewDocType('novel')}
                >
                  <Book className="h-4 w-4 mr-2" />
                  Novel
                </Button>
                
                <Button 
                  type="button"
                  variant="outline"
                  className={newDocType === 'screenplay' ? 'bg-slate-200 dark:bg-slate-700' : ''}
                  onClick={() => setNewDocType('screenplay')}
                >
                  <Film className="h-4 w-4 mr-2" />
                  Screenplay
                </Button>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setNewDocDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleCreateDoc}
              disabled={!newDocTitle.trim()}
            >
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Sidebar;

