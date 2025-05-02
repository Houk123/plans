import { navLinks } from "@/lib/nav/NavLinks";
import { 
    Box, 
    Link, 
    Collapsible, 
    Flex 
} from "@chakra-ui/react";
import React from "react";
import { LuChevronDown } from "react-icons/lu";
import { NavLinksInterface } from "@/types/lib/nav";

import "./style.scss";

const NavSidebarGeneral = () => {
    return (
        <nav className="nav-sidebar">
            <Box as="ul" listStyleType="none">
                {navLinks.map((link, index) => (
                    <ListSidebar key={index} link={link} />
                ))}
            </Box>
        </nav>
    );
}

const ListSidebar: React.FC<{link: NavLinksInterface}> = (props) => {
    const { link } = props;
    return (
        <li>
            {link.hasOwnProperty("submenu") && Array.isArray(link.submenu) ? (
                <Collapsible.Root>
                    <Flex alignContent="center">
                        <Link href={link.href}>{link.title}</Link>
                        <Collapsible.Trigger asChild>
                            <LuChevronDown />
                        </Collapsible.Trigger> 
                    </Flex>
                    <Collapsible.Content>
                        <Box as="ul" listStyleType="none">
                        {link.submenu.map((submenuLink, index) => (
                            <ListSidebar key={index} link={submenuLink} />
                        ))}
                        </Box>
                    </Collapsible.Content>
                </Collapsible.Root>
            ) : (
                <Link href={link.href}>{link.title}</Link>
            )}
        </li>
    );
}

export default NavSidebarGeneral;