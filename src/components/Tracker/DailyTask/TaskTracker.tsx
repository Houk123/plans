import { useStopwatch } from "@/hooks/time/useStopwatch";
import { Button, Progress, Stat, Text } from "@chakra-ui/react";
import React from "react";

interface ITaskTrackerProps{
    idTask: number
    fullTime: number
}

const TaskTracker: React.FC<ITaskTrackerProps> = (props) => {
    const {
        idTask,
        fullTime
    } = props;

    const {
            start, stop, 
            time, formattedTime
    } = useStopwatch({idTask});
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