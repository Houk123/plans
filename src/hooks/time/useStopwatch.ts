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
    }, [isRunning, incrementTime]);

    const start = () => {
        startTime()
    };

    const stop = () => {
        stopTime()
    };

    return {
        start,
        stop,
    };
};