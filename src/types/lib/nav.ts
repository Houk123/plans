import { ReactNode } from "react";

export interface NavLinksInterface{
    name: string
    title: string
    href: string
    img?: string
    icon?: ReactNode
    submenu?: NavLinksInterface[]
}