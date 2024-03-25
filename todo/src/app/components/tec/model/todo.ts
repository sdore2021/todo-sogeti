export interface Todo {
    id: number,
    title: string,
    description: string,
    state: string
}

export enum STATUS {
    NEW_TASK = "New Task",
    IN_PRORESS = "In Progress",
    COMPLETED = "Completed"
}