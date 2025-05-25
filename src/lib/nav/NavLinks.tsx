import { NavLinksInterface } from "@/types/lib/nav";

import { 
    House, 
    NotebookPen, 
    User,
    UsersRound,
    Building,
    BriefcaseBusiness,
    Handshake,
    LayoutList,
    Building2
} from "lucide-react";

export const navLinks: NavLinksInterface[] = [
    {
        name: "main",
        title: "Главная",
        href: "/",
        icon: <House />
    },
    {
        name: "company",
        title: "Компания",
        href: "/",
        icon: <Building2 />
    },
    {
        name: "team",
        title: "Команда",
        href: "/",
        icon: <Handshake />
    },
    {
        name: "tasks",
        title: "Задачи",
        href: "/",
        icon: <LayoutList />
    },{
        name: "plans",
        title: "План",
        href: "/plans",
        icon: <NotebookPen />,
        submenu: [
            {
                name: "plans_my",
                title: "Мой",
                href: "/plans/my",
                icon: <User />
            },
            {
                name: "plans_command",
                title: "Команды",
                href: "/plans/command",
                icon: <UsersRound />
            },{
                name: "plans_manager",
                title: "Менеджеров",
                href: "/plans/managers",
                icon: <Building />
            },{
                name: "plans_subdordinates",
                title: "Подопечных",
                href: "/plans/subordinates",
                icon: <BriefcaseBusiness />
            }
        ]
    }
]