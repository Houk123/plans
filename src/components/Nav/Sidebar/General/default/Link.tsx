"use client"

import React, { useState } from "react";
import { Tooltip } from "@/components/ui/tooltip";
import { Collapsible, Flex, Link, Icon } from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";
import { NavLinksInterface } from "@/types/lib/nav";
import { motion } from "framer-motion";

interface ILinkSidebar{
    link: NavLinksInterface
}
const MotionComponent = motion.create(Icon)
const LinkSidebar: React.FC<ILinkSidebar> = (props) => {
    const { link } = props;
    const [isOpen, setIsOpen] = useState(false); 
    return (
        <Tooltip content={link.title}>
            <Flex className="nav-sidebar__link">
                <Link href={link.href}>
                    {link.icon} 
                    <span>
                        {link.title}
                    </span>
                </Link>
                {link.hasOwnProperty("submenu") && (
                    <Collapsible.Trigger asChild>
                        <MotionComponent
                            animate={{ rotate: isOpen ? 180 : 0}} 
                            transition={{ duration: 0.5 }}  
                            
                            onClick={() => setIsOpen(prev => !prev)}
                        >
                            <LuChevronDown />
                        </MotionComponent>
                    </Collapsible.Trigger> 
                )}
            </Flex>
        </Tooltip>
    );
}

export default LinkSidebar;