import React, { useEffect, useRef, useState } from "react";

import { 
    Box, 
    VStack, 
} from "@chakra-ui/react";

import GlobalsTracker from "./GlobalsTracker";
import TaskTracker from "./TaskTracker";

import "./style.scss";

const DailyTaskTracker: React.FC = () => {
    return (
        <VStack w="100%" alignItems="start">
            <GlobalsTracker/>
            <Box as="ul" gap="5rem">
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
        </VStack>
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