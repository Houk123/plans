import { useEffect, useRef } from "react";

interface IStopwatch {
    isRunning: boolean;
    startTime: () => void,
    stopTime: () => void,
    incrementTime: () => void,
}

export const useStopwatch = (props: IStopwatch) => {
    const {
        isRunning,
        startTime,
        stopTime,
        incrementTime,
    } = props;

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isRunning && intervalRef.current === null) {
            intervalRef.current = setInterval(() => {
                console.log('test')
                incrementTime();
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
    }, [isRunning]);

    const start = () => {
        startTime()
    };

    const stop = () => {
        stopTime()
    };

    const formatTime = (t: number) => {
        const hours = Math.floor(t / 3600).toString().padStart(2, "0");
        const minutes = Math.floor((t % 3600) / 60).toString().padStart(2, "0");
        const seconds = (t % 60).toString().padStart(2, "0");

        return `${hours}:${minutes}:${seconds}`;
    };

    return {
        isRunning,
        start,
        stop,
        formattedTime: formatTime,
    };
};