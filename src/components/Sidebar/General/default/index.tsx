"use client"
import { ColorModeButton } from "@/components/ui/color-mode"

import React from "react";
import NavSidebarGeneral from "@/components/Nav/Sidebar/General/default";

const SideBarGenaral: React.FC = () => {
    return (
        <aside>
            <ColorModeButton />
            <NavSidebarGeneral />
        </aside>
    );
}

export default SideBarGenaral;