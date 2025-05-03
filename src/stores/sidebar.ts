import {create} from "zustand";
import { persist } from "zustand/middleware";

interface SidebarStore{
    isOpen: boolean;
    isHydrated: boolean;
    setHydrated: (value: boolean) => void;
    toggle: () => void;
    open: () => void;
    close: () => void;
}

export const useSidebarStore = create<SidebarStore>()(
    persist(
        (set) => ({
            isOpen: false,
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