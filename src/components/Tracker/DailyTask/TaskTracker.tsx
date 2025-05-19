import React, { useEffect } from "react";

import { useStopwatch } from "@/hooks/time/useStopwatch";
import { Flex, Progress, Stat, Text } from "@chakra-ui/react";

import { useTimerStore } from "@/stores/timers";
import PlayPauseButton from "@/components/ui-my-plans/PlayPauseButton";
import { formatTime } from "@/scripts/time";
import { useSidebarStore } from "@/stores/sidebar";
import { motion } from "framer-motion";

const MotionComponent = motion.create(Stat.Root)

interface ITaskTrackerProps{
    idTask: number
    fullTime: number
}

const TaskTracker: React.FC<ITaskTrackerProps> = (props) => {
    const {
        idTask,
        fullTime
    } = props;

    const { isOpen } = useSidebarStore();

    const addTask = useTimerStore(state => state.addTask);
    const setTime = useTimerStore(state => state.setTimeTask);
    const time = useTimerStore(state => state.timersTask[idTask]?.time ?? 0);
    const isRunning = useTimerStore(state => state.timersTask[idTask]?.isRunning);
    const startTask = useTimerStore(state => state.startTask);
    const stopTask = useTimerStore(state => state.stopTask);

    const {
            start, stop, 
    } = useStopwatch({
        isRunning: isRunning,
        startTime: () => startTask(idTask),
        stopTime: () => stopTask(idTask),
        incrementTime: () => setTime(idTask, (prev) => prev + 1),
    });

    useEffect(() => {
        addTask(idTask)
    },[idTask]);

    const handlePlay = () => {
        if(isRunning){
            stop();
        }else{
            start();
        }
    }

    return (
        <Flex alignItems="center" gap={5}>
            <PlayPauseButton 
                    isRunning={isRunning}
                    handlePlay={handlePlay}
                />
            <motion.nav 
                        className="nav-sidebar"
                        animate={{ width: isOpen ? "12rem" : "0"}} 
                        transition={{ duration: 0.5 }}   
                    >
                {isOpen && (
                    <MotionComponent
                        className="task-tracker__info"
                        initial={{ opacity: 0, x: -10}}
                        animate={{ 
                            opacity: 1, 
                            x: 0,
                        }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 2 }}    
                    >
                        <Stat.Label>Создать юнит тесты</Stat.Label>
                        <Text>{formatTime(fullTime)}/{formatTime(time)}</Text>
                        <Progress.Root 
                            min={0} 
                            max={fullTime} 
                            value={time}
                            variant="outline"
                        >
                            <Progress.Track>
                                <Progress.Range />
                            </Progress.Track>
                        </Progress.Root>
                    </MotionComponent>
                )}
                    </motion.nav>
        </Flex>
    );
}

export default TaskTracker;