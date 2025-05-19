import { useStopwatch } from "@/hooks/time/useStopwatch";
import { Button, Progress, Stat, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useTimerStore } from "@/stores/timers";

interface ITaskTrackerProps{
    idTask: number
    fullTime: number
}

const TaskTracker: React.FC<ITaskTrackerProps> = (props) => {
    const {
        idTask,
        fullTime
    } = props;

    const addTask = useTimerStore(state => state.addTask);
    const setTime = useTimerStore(state => state.setTimeTask);
    const time = useTimerStore(state => state.timersTask[idTask]?.time ?? 0);
    const isRunning = useTimerStore(state => state.timersTask[idTask]?.isRunning);
    const startTask = useTimerStore(state => state.startTask);
    const stopTask = useTimerStore(state => state.stopTask);

    const {
            start, stop, 
            formattedTime
    } = useStopwatch({
        isRunning: isRunning,
        startTime: () => startTask(idTask),
        stopTime: () => stopTask(idTask),
        incrementTime: () => setTime(idTask, (prev) => prev + 1),
    });

    useEffect(() => {
        addTask(idTask)
    },[idTask]);

    return (
        <Stat.Root>
            <Stat.Label>Создать юнит тесты</Stat.Label>
            <Stat.ValueText alignItems="baseline">
                00<Stat.ValueUnit>:</Stat.ValueUnit>00<Stat.ValueUnit>:</Stat.ValueUnit>00
            </Stat.ValueText>
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
            <Text>{formattedTime(time)}</Text>
            <Button variant="outline" onClick={start}>Начать задачу</Button>
            <Button variant="outline" onClick={stop}>Закончить задачу</Button>
        </Stat.Root>
    );
}

export default TaskTracker;