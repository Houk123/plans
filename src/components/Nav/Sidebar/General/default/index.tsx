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
    const { isOpen } = useSidebarStore();

    return (
        <motion.nav 
            className="nav-sidebar"
            animate={{ width: isOpen ? "12rem" : "3rem"}} 
            transition={{ duration: 0.5 }}   
        >
            <Box as="ul" listStyleType="none">
                {navLinks.map((link, index) => (
                    <ListSidebar key={index} link={link} />
                ))}
            </Box>
        </motion.nav>
    );
}


export default NavSidebarGeneral;