import {FC, SVGProps} from "react";

export interface LinkInterface {
    name: string
    title: string
    href: string
    img?: string
    icon?: FC<SVGProps<SVGSVGElement>>
}

export interface NavLinksInterface extends LinkInterface{
    submenu?: LinkInterface[]
}