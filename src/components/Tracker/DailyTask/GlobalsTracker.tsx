import React from "react"

import { useStopwatch } from "@/hooks/time/useStopwatch";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useTimerStore } from "@/stores/timers";

const GlobalsTracker: React.FC = () => {
    const setTimeGlobals = useTimerStore(state => state.setTimeGlobals);
    const time = useTimerStore(state => state.globalsTimers.time);
    const isRunning = useTimerStore(state =>state.globalsTimers.isRunning);
    const startTimeGlobals = useTimerStore(state => state.startTimeGlobals);
    const stopTimeGlobals = useTimerStore(state => state.stopTimeGlobals);
    
    const {
            start, stop, 
            formattedTime
    } = useStopwatch({
        isRunning: isRunning,
        startTime: startTimeGlobals,
        stopTime: stopTimeGlobals,
        incrementTime: () => setTimeGlobals((prev) => prev + 1),
    });
    
    return (
        <Flex>
            <Text>Время</Text>
            <Text>{formattedTime(time)}</Text>
            <Button variant="outline" onClick={start}>Начать день</Button>
            <Button variant="outline" onClick={stop}>Закончить день</Button>
        </Flex>
    );
}

export default GlobalsTracker;