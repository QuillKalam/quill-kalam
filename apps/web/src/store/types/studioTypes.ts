export type File = {
  id: string;
  name: string;
  path: string;
  content?: string;
};

export type StudioStore = {
  selectedFile: File | null;
  openedTabs: File[];
  setSelectedFile: (file: File) => void;
  openTab: (file: File) => void;
  closeTab: (fileId: string) => void;
};
