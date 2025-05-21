import { create } from "zustand";

interface SettingState {
    theme: string | null;
    setTheme: (feature:string | null) => void
}

export const useSettingStore = create<SettingState>((set)=>({
    theme: null,
    setTheme: (theme) => set({theme: theme}),
}));
