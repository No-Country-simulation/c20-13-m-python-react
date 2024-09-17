import { create } from "zustand";
import { Products } from "../assets/Views/Products";

export const useApiCall = create((set) => ({
  // Store
  users: [],
  products: [],
  bears: 0,

  // Actions
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));
