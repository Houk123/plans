import { navLinks } from "@/lib/nav/NavLinks";
import { Box, Button, ButtonGroup, IconButton, Link, Menu, Portal } from "@chakra-ui/react";
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
                            <Menu.Root>
                                <ButtonGroup size="sm" variant="outline" attached>
                                    <Button asChild variant="outline">
                                        <Link href={link.href}>{link.title}</Link>
                                    </Button>
                                    <Menu.Trigger asChild>
                                        <IconButton variant="outline">
                                            <LuChevronDown />
                                        </IconButton>
                                    </Menu.Trigger>
                                </ButtonGroup>
                                <Portal>
                                    <Menu.Positioner>
                                        <Menu.Content>
                                            {link.submenu.map((submenuLink, index) => (
                                                <Menu.Item asChild value={`submenu_${link.name}_index_${index}}`}>
                                                    <Link href={submenuLink.href}>{submenuLink.title}</Link>
                                                </Menu.Item>
                                            ))}
                                        </Menu.Content>
                                    </Menu.Positioner>
                                </Portal>
                        </Menu.Root>
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