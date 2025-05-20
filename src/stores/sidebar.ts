import {create} from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface SidebarStoreState{
    isOpen: boolean;
    isHydrated: boolean;
}

interface SidebarStoreActions{
    setHydrated: (value: boolean) => void;
    toggle: () => void;
    open: () => void;
    close: () => void;
}

type SidebarStore = SidebarStoreState & SidebarStoreActions;

export const useSidebarStore = create<SidebarStore>()(
    persist(
        (set) => ({
            isOpen: true,
            isHydrated: false,
            toggle: () => set((state) => ({ isOpen: !state.isOpen })),
            open: () => set({ isOpen: true }),
            close: () => set({ isOpen: false }),
            setHydrated: (value) => set({isHydrated: value}),
        }),
        {
            name: "sidebar-storage",
            onRehydrateStorage: () => (state) => {
                state?.setHydrated(true);
            }
        },
    ),
)