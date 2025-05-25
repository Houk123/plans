"use client"

import React, { useEffect } from "react";

import { useStopwatch } from "@/hooks/time/useStopwatch";
import { Flex, Progress, Stat, Text } from "@chakra-ui/react";

import { useTimerStore } from "@/stores/timers";
import PlayPauseButton from "@/components/ui-my-plans/PlayPauseButton";
import { formatTime } from "@/scripts/time";
import { Task } from "@/interfaces/task";

interface ITaskTrackerProps{
    task: Task
}

const TaskTracker: React.FC<ITaskTrackerProps> = (props) => {
    const {
        task
    } = props;

    const addTask = useTimerStore(state => state.addTask);
    const setTime = useTimerStore(state => state.setTimeTask);
    const time = useTimerStore(state => state.timersTask[task.id]?.time ?? 0);
    const isRunning = useTimerStore(state => state.timersTask[task.id]?.isRunning);
    const startTask = useTimerStore(state => state.startTask);
    const stopTask = useTimerStore(state => state.stopTask);

    const {
            start, stop, 
    } = useStopwatch({
        isRunning: isRunning,
        startTime: () => startTask(task.id),
        stopTime: () => stopTask(task.id),
        incrementTime: () => setTime(task.id, (prev) => prev + 1),
    });

    useEffect(() => {
        addTask(task.id)
    },[task.id, addTask]);

    const handlePlay = () => {
        if(isRunning){
            stop();
        }else{
            start();
        }
    }

    return (
        <Flex
            className="tracker-sidebar" 
            alignItems="center" 
            gap={5}
        >
            <PlayPauseButton 
                    isRunning={isRunning}
                    handlePlay={handlePlay}
                />
            <Stat.Root
                className="task-tracker__info"
                size="sm"
            >
                <Stat.Label>{task.name}</Stat.Label>
                <Text textStyle="sm">{formatTime(task.fullTime)}/{formatTime(time)}</Text>
                <Progress.Root 
                    size="xs"
                    min={0} 
                    max={task.fullTime} 
                    value={time}
                    variant="outline"
                >
                    <Progress.Track>
                        <Progress.Range />
                    </Progress.Track>
                </Progress.Root>
            </Stat.Root>
        </Flex>
    );
}

export default TaskTracker;