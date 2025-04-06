import { navLinks } from "@/lib/nav/NavLinks";
import { Box, Link, Collapsible, Flex } from "@chakra-ui/react";
import React from "react";
import { LuChevronDown } from "react-icons/lu";

import "./style.scss";

const NavSidebarGeneral = () => {
    return (
        <nav>
            <Box className="red" as="ul" listStyleType="inherit">
                {navLinks.map(link => (
                    <li key={link.name}>
                        {link.hasOwnProperty("submenu") && Array.isArray(link.submenu) ? (
                            <Collapsible.Root>
                                <Flex alignContent="center">
                                    <Link href={link.href}>{link.title}</Link>
                                    <Collapsible.Trigger asChild>
                                        <LuChevronDown />
                                    </Collapsible.Trigger> 
                                </Flex>
                                <Collapsible.Content>
                                    {link.submenu.map((submenuLink, index) => (
                                        <Link key={index} href={submenuLink.href}>{submenuLink.title}</Link>
                                    ))}
                                </Collapsible.Content>
                        </Collapsible.Root>
                        ) : (
                            <Link href={link.href}>{link.title}</Link>
                        )}
                    </li>
                ))}
            </Box>
        </nav>
    );
}

export default NavSidebarGeneral;