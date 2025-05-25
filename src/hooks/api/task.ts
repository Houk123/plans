import { DefaultKey, QUERY_KEY } from "@/configs/api/queryKey";
import { fetchDailyTask } from "@/scripts/api/task";
import { useQuery } from "@tanstack/react-query"

export const useTaskDailyApi = () => {
    return useQuery({
        queryKey: QUERY_KEY.taskDaily as DefaultKey,
        queryFn: fetchDailyTask
    });
}

export const useNotBusyTaskApi = () => {
    return useQuery({
        queryKey: QUERY_KEY.notBusyTask as DefaultKey,
        queryFn: fetchDailyTask
    });
}