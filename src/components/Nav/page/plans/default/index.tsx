"use client"

import React from "react";
import { Heading, Wrap, WrapItem } from "@chakra-ui/react"
import { NavLinksInterface } from "@/types/lib/nav";

interface PropsNavPlans{
    links: NavLinksInterface[]
}

const NavPlans: React.FC<PropsNavPlans> = (props) => {
    const { links } = props;
    return (
        <Wrap>
            {links.map((link, index) => (
                <WrapItem key={index}>
                    <Heading>{link.title}</Heading>
                </WrapItem>
            ))}
        </Wrap>
    );
}

export default NavPlans;