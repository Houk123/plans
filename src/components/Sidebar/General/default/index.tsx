"use client"
import React from "react";
import { useSidebarStore } from "@/stores/sidebar";

import { ColorModeButton } from "@/components/ui/color-mode"
import NavSidebarGeneral from "@/components/Nav/Sidebar/General/default";

import "./style.scss";
import { 
    VStack,
    IconButton, 
    Flex,
} from "@chakra-ui/react";
import { Menu } from "lucide-react";
import DailyTaskTracker from "@/components/Tracker/DailyTask";

const SidebarGenaral: React.FC = () => {
    const { isHydrated, toggle } = useSidebarStore();

    if(!isHydrated) return null;
    
    return (
        <aside className="sidebar">
            <VStack className="sidebar__main" alignItems="center">
                <Flex w="100%" alignItems="center" justifyContent="flex-start">
                    <IconButton
                        variant="outline" 
                        aria-label="Search database" 
                        onClick={toggle}>
                        <Menu />
                    </IconButton>
                </Flex>
                <DailyTaskTracker />
                <NavSidebarGeneral />
            </VStack>
        
            <ColorModeButton />
        </aside>
    );
}

export default SidebarGenaral;