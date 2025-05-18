import React from "react";
import { Tooltip } from "@/components/ui/tooltip";
import { useSidebarStore } from "@/stores/sidebar";
import { Collapsible, Flex, Link } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { LuChevronDown } from "react-icons/lu";
import { NavLinksInterface } from "@/types/lib/nav";

interface ILinkSidebar{
    link: NavLinksInterface
}

const LinkSidebar: React.FC<ILinkSidebar> = (props) => {
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

export default LinkSidebar;