import { NavLinksInterface } from "@/types/lib/nav";

export const navLinks: NavLinksInterface[] = [
    {
        name: "main",
        title: "Главная",
        href: "/"
    },{
        name: "plans",
        title: "План",
        href: "/plans",
        submenu: [
            {
                name: "plans_my",
                title: "Мой план",
                href: "/plans/my",
            },
            {
                name: "plans_command",
                title: "План команды",
                href: "/plans/command",
            },{
                name: "plans_manager",
                title: "План менеджеров",
                href: "/plans/managers",
            },{
                name: "plans_subdordinates",
                title: "План подопечных",
                href: "/plans/subordinates",
            }
        ]
    }
]