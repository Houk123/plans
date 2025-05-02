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
                title: "Мой",
                href: "/plans/my"
            },
            {
                name: "plans_command",
                title: "Команды",
                href: "/plans/command",
            },{
                name: "plans_manager",
                title: "Менеджеров",
                href: "/plans/managers",
            },{
                name: "plans_subdordinates",
                title: "Подопечных",
                href: "/plans/subordinates",
            }
        ]
    }
]