"use client"

import React from "react";

import { 
    Box, 
    Card
} from "@chakra-ui/react";

import GlobalsTracker from "./GlobalsTracker";
import TaskTracker from "./TaskTracker";
import { useTaskDailyApi } from "@/hooks/api/task";
import "./style.scss";

const DailyTaskTracker: React.FC = () => {
    const {
        isLoading, isError, error, data: tasks
    } = useTaskDailyApi();

    if(isLoading) return <></>;
    if(isError) return (
        <>
            {error}
        </>
    );

    if(!tasks) return '';

    return (
        <Card.Root w="100%" maxH="25rem" minH="20rem"  overflow="auto" size="sm" variant="subtle">
            <Card.Header>
                <Card.Title>Рабочий день</Card.Title>
                <GlobalsTracker/>
            </Card.Header>
            <Card.Body>
                <Card.Title>Задачи</Card.Title> 
                <Box as="ul" display="flex" flexDirection="column" gap={3}>
                    {tasks.map(task => (
                        <li key={task.id}>
                            <TaskTracker
                                task={task}
                            />
                        </li>
                    ))}
                </Box>
            </Card.Body>
        </Card.Root> 
    )
}

export default DailyTaskTracker;