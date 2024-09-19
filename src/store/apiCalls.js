import { create } from "zustand";

export const useApiCall = create((set) => ({
  // Store
  bears: 0,
  // Actions
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));
