import {FC, SVGProps} from "react";

export interface NavLinksInterface{
    name: string
    title: string
    href: string
    img?: string
    icon?: FC<SVGProps<SVGSVGElement>>
    submenu?: NavLinksInterface[]
}