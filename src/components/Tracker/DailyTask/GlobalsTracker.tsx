"use client"

import React from "react"

import { useStopwatch } from "@/hooks/time/useStopwatch";
import { Flex, Text } from "@chakra-ui/react";
import { useTimerStore } from "@/stores/timers";
import PlayPauseButton from "@/components/ui-my-plans/PlayPauseButton";
import { formatTime } from "@/scripts/time";
import { useSidebarStore } from "@/stores/sidebar";


const GlobalsTracker: React.FC = () => {
    const { isOpen } = useSidebarStore();

    const setTimeGlobals = useTimerStore(state => state.setTimeGlobals);
    const time = useTimerStore(state => state.globalsTimers.time);
    const isRunning = useTimerStore(state =>state.globalsTimers.isRunning);
    const startTimeGlobals = useTimerStore(state => state.startTimeGlobals);
    const stopTimeGlobals = useTimerStore(state => state.stopTimeGlobals);
    
    const {
            start, stop, 
    } = useStopwatch({
        isRunning: isRunning,
        startTime: startTimeGlobals,
        stopTime: stopTimeGlobals,
        incrementTime: () => setTimeGlobals((prev) => prev + 1),
    });
    
    const handlePlay = () => {
        if(isRunning){
            stop();
        }else{
            start();
        }
    }

    return (
        <Flex gap={5}>
            <PlayPauseButton 
                isRunning={isRunning}
                handlePlay={handlePlay}
            /> 
            <Text>Время</Text>
            <Text>{formatTime(time)}</Text>   
        </Flex>
    );
}

export default GlobalsTracker;