import { Task } from "@/interfaces/task";
import api from "@/lib/api";

export const fetchDailyTask = async (): Promise<Task[]> => {
    try{
        const dailyTask = await fetchTask({
            user_id: 1
        });

        return dailyTask 
    }catch(error){
        throw error;
    }
}

export const fetchNotBusyTask = async (): Promise<Task[]> => {
    try{
        const notBusyTask = await fetchTask({
            user_id: 0
        });

        return notBusyTask;
    }catch(error){
        throw error;
    }
}

export const fetchTask = async (params: Record<string, string | number>): Promise<Task[]> => {
    try{
        const tasks = await api.get('/tasks', {
            params
        });

        return tasks.data 
    }catch(error){
        throw error;
    }
}
