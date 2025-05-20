"use client"

import React from "react";
import { useSidebarStore } from "@/stores/sidebar";
import { motion } from "framer-motion";

import { navLinks } from "@/lib/nav/NavLinks";

import { 
    Box
} from "@chakra-ui/react";

import ListSidebar from "./List";


import "./style.scss";

const NavSidebarGeneral: React.FC = () => {
    return (
        <Box as="nav" className="nav-sidebar">
            <Box as="ul" listStyleType="none">
                {navLinks.map((link, index) => (
                    <ListSidebar key={index} link={link} />
                ))}
            </Box>
        </Box>
    );
}


export default NavSidebarGeneral;