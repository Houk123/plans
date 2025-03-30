"use client"
import { ColorModeButton } from "@/components/ui/color-mode"

import React from "react";
import { navLinks } from "@/lib/nav/NavLinks";
import { Link, Box, Button, Menu, Portal, ButtonGroup, IconButton } from "@chakra-ui/react"
import { LuChevronDown } from "react-icons/lu"
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