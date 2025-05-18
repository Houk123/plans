import { useTimerStore } from "@/stores/timers";
import { useEffect, useRef } from "react";

interface IStopwatch {
  idTask?: number;
}

export const useStopwatch = ({ idTask }: IStopwatch) => {
    const addTask = useTimerStore(state => state.addTask);

    const time = useTimerStore(state =>
    idTask !== undefined
        ? state.timersTask[idTask]?.time ?? 0
        : state.globalsTimers.time
    );

    const isRunning = useTimerStore(state =>
    idTask !== undefined
        ? state.timersTask[idTask]?.isRunning ?? false
        : state.globalsTimers.isRunning
    );

    const setTime = useTimerStore(state => state.setTimeTask);
    const setTimeGlobals = useTimerStore(state => state.setTimeGlobals);

    const startTask = useTimerStore(state => state.startTask);
    const stopTask = useTimerStore(state => state.stopTask);
    const startTimeGlobals = useTimerStore(state => state.startTimeGlobals);
    const stopTimeGlobals = useTimerStore(state => state.stopTimeGlobals);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if(idTask !== undefined){
            addTask(idTask);
        }
    },[idTask, addTask])

    useEffect(() => {
        if (isRunning && intervalRef.current === null) {
            intervalRef.current = setInterval(() => {
                if (idTask !== undefined) {
                    setTime(idTask, (prev) => prev + 1);
                } else {
                    setTimeGlobals((prev) => prev + 1);
                }
            }, 1000);
        }

        if (!isRunning && intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        return () => {
            if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            }
        };
    }, [isRunning, idTask, setTime, setTimeGlobals]);

    const start = () => {
        if (idTask !== undefined) {
            startTask(idTask);
        } else {
            startTimeGlobals()
        }
    };

    const stop = () => {
        if (idTask !== undefined) {
            stopTask(idTask);
        } else {
            stopTimeGlobals()
        }
    };

    const formatTime = (t: number) => {
        const hours = Math.floor(t / 3600).toString().padStart(2, "0");
        const minutes = Math.floor((t % 3600) / 60).toString().padStart(2, "0");
        const seconds = (t % 60).toString().padStart(2, "0");

        return `${hours}:${minutes}:${seconds}`;
    };

    return {
        time,
        isRunning,
        start,
        stop,
        formattedTime: formatTime,
    };
};