"use client"

import React from "react";

import { 
    Box, 
    Card
} from "@chakra-ui/react";

import GlobalsTracker from "./GlobalsTracker";
import TaskTracker from "./TaskTracker";

import "./style.scss";

const DailyTaskTracker: React.FC = () => {
    return (
        <Card.Root w="100%" maxH="25rem" minH="20rem"  overflow="auto" size="sm" variant="subtle">
            <Card.Header>
                <Card.Title>Рабочий день</Card.Title>
                <GlobalsTracker/>
            </Card.Header>
            <Card.Body>
                <Card.Title>Задачи</Card.Title> 
                <Box as="ul" display="flex" flexDirection="column" gap={3}>
                    {
                        tasksTime.map(task => (
                            <li key={task.id}>
                                <TaskTracker
                                    idTask={task.id}
                                    fullTime={task.fullTime}
                                />
                            </li>
                        ))
                    }
                </Box>
            </Card.Body>
        </Card.Root>     
    )
}

const tasksTime = [
    {
        id: 1,
        fullTime: 72000
    },{
        id: 2,
        fullTime: 60
    },{
        id: 3,
        fullTime: 2000
    }
]

export default DailyTaskTracker;