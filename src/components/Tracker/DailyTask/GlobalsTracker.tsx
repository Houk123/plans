import React from "react"

import { useStopwatch } from "@/hooks/time/useStopwatch";
import { Flex, Text, VStack } from "@chakra-ui/react";
import { useTimerStore } from "@/stores/timers";
import PlayPauseButton from "@/components/ui-my-plans/PlayPauseButton";
import { formatTime } from "@/scripts/time";
import { motion } from "framer-motion";
import { useSidebarStore } from "@/stores/sidebar";

const MotionComponent = motion.create(Flex)

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
        <MotionComponent
            animate={{ width: isOpen ? "100%" : "3rem"}} 
            transition={{ duration: 0.5 }}   
            gap={5}
            overflow="hidden"
        >
            <PlayPauseButton 
                isRunning={isRunning}
                handlePlay={handlePlay}
            /> 
            {isOpen && (
                <>
                    <Text>Время</Text>
                    <Text>{formatTime(time)}</Text>  
                </>
            )}     
        </MotionComponent>
    );
}

export default GlobalsTracker;