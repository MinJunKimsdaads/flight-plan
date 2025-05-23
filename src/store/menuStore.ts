import { create } from "zustand";

interface MenuState {
    menu: boolean;
    setMenu: (menu:boolean)=>void;
}

export const useMenuStore = create<MenuState>((set)=>({
    menu:false,
    setMenu: (menu) => set({menu: menu}),
}));