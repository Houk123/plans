"use client"

import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

import "./style.scss"
import DrawerTaskCreate from "@/components/Drawer/Task/Create";
import { ColorModeButton } from "@/components/ui/color-mode";
import SearchInput from "@/components/ui-my-plans/SearchInput";

const HeaderDefault: React.FC = () => {


    return (
        <Box as="header" className="header--default">
            <Heading size="4xl">Dev Dynasty</Heading>
            <Flex gap={5}>
                <SearchInput />
                <DrawerTaskCreate />
            </Flex>
            <Box position="fixed" right="1rem" bottom="1rem">
                <ColorModeButton />
            </Box>
        </Box>
    )
}

export default HeaderDefault;