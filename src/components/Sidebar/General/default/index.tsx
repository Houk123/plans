"use client"
import { ColorModeButton } from "@/components/ui/color-mode"

import React from "react";
import NavSidebarGeneral from "@/components/Nav/Sidebar/General/default";

import "./style.scss";

const SideBarGenaral: React.FC = () => {
    return (
        <aside className="sidebar">
            <ColorModeButton />
            <NavSidebarGeneral />
        </aside>
    );
}

export default SideBarGenaral;