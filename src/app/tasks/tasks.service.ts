import { Injectable } from "@angular/core";
import { type newTaskData } from "./task/task.model";

function generateRandomID() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomID = '';

    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomID += characters[randomIndex];
    }

    return randomID;
}
const dummyTasks = [
    {
        id: 't1',
        userId: 'u1',
        title: 'Master Angular',
        summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
        dueDate: '2025-12-31',
    },
    {
        id: 't2',
        userId: 'u3',
        title: 'Build first prototype',
        summary: 'Build a first prototype of the online shop website',
        dueDate: '2024-05-31',
    },
    {
        id: 't3',
        userId: 'u3',
        title: 'Prepare issue template',
        summary:
            'Prepare and describe an issue template which will help with project management',
        dueDate: '2024-06-15',
    },
]
@Injectable({ providedIn: 'root' })
export class TaskService {
    private tasks = dummyTasks;

    constructor() {
        const tasks = localStorage.getItem('tasks')

        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userId: string) {
        return this.tasks.filter(task => task.userId === userId);
    }

    addTask(taskData: newTaskData, userId: string) {
        this.tasks.push({
            id: generateRandomID(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date,
        });
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}