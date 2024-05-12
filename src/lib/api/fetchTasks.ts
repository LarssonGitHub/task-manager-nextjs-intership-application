import { tasks } from "@/DB/tasks";

export const fetchTasks =(): Task[] => {
    return tasks;
  }

export const fetchTaskById = (id: string): Task => {
  const convertId: number = Number(id);
  return tasks.filter(item => item.id === convertId)[0]
} 

export const fetchAllTasksByUser = (user: string): Task[] => {
  return tasks.filter(item => item.createdBy === user)
    }
  