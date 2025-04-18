import { create } from "zustand";
import { StudioStore } from "./types/studioTypes";

export const useStudioStore = create<StudioStore>((set) => ({
  selectedFile: null,
  openedTabs: [],

  setSelectedFile: (file) => set({ selectedFile: file }),

  openTab: (file) =>
    set((state) => {
      const isAlreadyOpen = state.openedTabs.some((f) => f.id === file.id);
      return {
        openedTabs: isAlreadyOpen
          ? state.openedTabs
          : [...state.openedTabs, file],
        selectedFile: file,
      };
    }),

  closeTab: (fileId) =>
    set((state) => ({
      openedTabs: state.openedTabs.filter((f) => f.id !== fileId),
      selectedFile:
        state.selectedFile?.id === fileId ? null : state.selectedFile,
    })),
}));
