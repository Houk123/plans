import React from "react";
import { useSidebarStore } from "@/stores/sidebar";
import { motion, AnimatePresence } from "framer-motion";

import { navLinks } from "@/lib/nav/NavLinks";

import { LuChevronDown } from "react-icons/lu";

import { 
    Box, 
    Link, 
    Collapsible, 
    Flex
} from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip"

import { NavLinksInterface } from "@/types/lib/nav";

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

const ListSidebar: React.FC<{ link: NavLinksInterface }> = (props) => {
    const { link } = props;
    return (
        <li>
            {link.hasOwnProperty("submenu") && Array.isArray(link.submenu) ? (
                <Collapsible.Root>
                    <LinkSidebar link={link} />
                    <Collapsible.Content>
                        <Box as="ul" listStyleType="none">
                        {link.submenu.map((submenuLink, index) => (
                            <ListSidebar key={index} link={submenuLink} />
                        ))}
                        </Box>
                    </Collapsible.Content>
                </Collapsible.Root>
            ) : (
                <LinkSidebar link={link} />
            )}
        </li>
    );
}

const LinkSidebar: React.FC<{link: NavLinksInterface}> = (props) => {
    const { isOpen } = useSidebarStore();
    const { link } = props;

    return (
        <Tooltip content={link.title}>
            <Flex className="nav-sidebar__link">
                <Link href={link.href}>
                    {link.icon} 
                    <AnimatePresence>
                        {isOpen && (
                            <motion.span
                                initial={{ opacity: 0, x: -10}}
                                animate={{ opacity: 1, x: 0}}
                                exit={{ opacity: 0,x: -10 }}
                                transition={{ duration: .5 }}    
                            >
                                {link.title}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </Link>
                {link.hasOwnProperty("submenu") && (
                    <Collapsible.Trigger asChild>
                        <LuChevronDown />
                    </Collapsible.Trigger> 
                )}
            </Flex>
        </Tooltip>
    );
}

export default NavSidebarGeneral;