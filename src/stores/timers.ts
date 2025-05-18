import { create } from "zustand";

type TimerTask = {
    idTask?: number,
    time: number,
    isRunning: boolean
}

type Updater = (prev:number) => number
type ChangeActiveTimers = (idTask: number) => void;

interface ITimerStore{
    globalsTimers: TimerTask
    timersTask: Record<number, TimerTask>,
    setTimeGlobals: (updater: Updater) => void,
    setTimeTask: (idTask: number, updater: Updater) => void,
    stopTask: ChangeActiveTimers,
    startTask: ChangeActiveTimers,
    addTask: ChangeActiveTimers,
    startTimeGlobals: () => void,
    stopTimeGlobals: () => void
}

export const useTimerStore = create<ITimerStore>()((set, get) => ({
    globalsTimers: {
        time: 0,
        isRunning: false
    },
    timersTask: {},

    setTimeGlobals: (updater) => set((state) => ({
        globalsTimers: {
            ...state.globalsTimers,
            time: updater(state.globalsTimers.time)
        }
    })),
    startTimeGlobals: () => set((state) => ({
        globalsTimers: {
            ...state.globalsTimers,
            isRunning: true
        }
    })),
    stopTimeGlobals: () => set((state) => ({
        globalsTimers: {
            ...state.globalsTimers,
            isRunning: false
        }
    })),
    stopTask: (idTask) => {
        const timers = get().timersTask;
        if(!isTaskInTimer(timers, idTask)) return;

        set({
            timersTask: {
                ...timers,
                [idTask]: {
                    ...timers[idTask],
                    isRunning: false
                }
            }
        })
    },
    startTask: (idTask) => {
        const timers = get().timersTask;
        if(!isTaskInTimer(timers, idTask)) return;

        set({
            timersTask: {
                ...timers,
                [idTask]: {
                    ...timers[idTask],
                    isRunning: true
                }
            }
        })
    },
    setTimeTask: (idTask, updater) => {
        const timers = get().timersTask;
        if(!timers.hasOwnProperty(idTask)) return;

        set({
            timersTask: {
                ...timers,
                [idTask]: {
                    ...timers[idTask],
                    time: updater(timers[idTask].time)
                }
            }
        })
    },
    addTask: (idTask) => {
        const timers = get().timersTask;
        if(timers.hasOwnProperty(idTask)) return;

        set({
            timersTask: {
                ...timers,
                [idTask]: {
                    idTask,
                    time: 0,
                    isRunning: false
                }
            }
        })
    }
}))

const isTaskInTimer = (timers: Record<number, TimerTask>, idTask: number) => {
    return (timers.hasOwnProperty(idTask))
}

/*
[
        {
            idTask: 1
            time: 0,
            isRunning: false
        }
    ]
*/