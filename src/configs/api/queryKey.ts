export type DefaultKey = string[];
type FunctionGenerateKey = (id: number) => [string, number];

type QueryKey = Record<string, DefaultKey | FunctionGenerateKey>

export const QUERY_KEY: QueryKey = {
    taskDaily: ["task_daily"] as const,
    notBusyTask: ["task_not_busy"] as const,
    taskEl: (id: number) => ["task", id] as const
}