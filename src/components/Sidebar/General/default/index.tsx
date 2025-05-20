"use client"

import React from "react";
import NavSidebarGeneral from "@/components/Nav/Sidebar/General/default";

import "./style.scss";
import { 
    VStack,
} from "@chakra-ui/react";
import DailyTaskTracker from "@/components/Tracker/DailyTask";
import UserPanelDefault from "@/components/UserPanel/default";

const SidebarGenaral: React.FC = () => {
    return (
        <aside className="sidebar">
            <VStack className="sidebar__main" alignItems="start">
                <VStack alignItems="start">
                    <UserPanelDefault />
                    <NavSidebarGeneral />
                </VStack>
                <DailyTaskTracker />
            </VStack>
        </aside>
    );
}

export default SidebarGenaral;