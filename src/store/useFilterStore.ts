import { create } from "zustand";

type FilterState = {
  sport: string;
  status: string;
  gender: string;
  position: string;
  query: string;
  sort: string;
  setFilter: (key: FilterKey, value: string) => void;
  reset: () => void;
};

type FilterKey = keyof Omit<FilterState, "setFilter" | "reset">;

const initialState = {
  sport: "all",
  status: "active",
  gender: "all",
  position: "all",
  query: "",
  sort: "name",
};

export const useFilterStore = create<FilterState>((set) => ({
  ...initialState,
  setFilter: (key, value) =>
    set((state) => ({ ...state, [key]: value }) as FilterState),
  reset: () => set(initialState),
}));
