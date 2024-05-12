"use client";

import React, { useState, useEffect } from 'react';
import { fetchTaskById, fetchAllTasksByUser } from '@/lib/api/fetchTasks';
import { removePendingTasks, removeFinishedTasks } from '@/lib/utils/dataAltering';
import TaskCardLarge from '@/components/cards/taskCards/TaskCardLarge';
import TaskCardSmall from '@/components/cards/taskCards/TaskCardSmall';

type Props = {
    params: { taskID: string },
    searchParams: {}
};

export default function Page({ params }: Props) {
    const [task, setTask] = useState<Task | null>(null);
    const [otherTasksByUser, setOtherTasksByUser] = useState<Tasks | null>(null);
    const [user, setUser] = useState<string>("User");

    // TODO is it worth to make this into a hook?
    // TODO implement error handling
    useEffect(() => {
        const taskData = fetchTaskById(params.taskID);
        const tasksByUser = fetchAllTasksByUser(taskData.createdBy);
        setUser(taskData.createdBy);
        setTask(taskData);
        setOtherTasksByUser(tasksByUser);
    }, []);

    if (!task ||!otherTasksByUser) {
        return null;
    }

    const completedTasks = removePendingTasks(otherTasksByUser);

    const finishedTasks = completedTasks.map(task => (
        <TaskCardSmall key={task.id} task={task} />
    ));

    const notFinishedTasks = removeFinishedTasks(otherTasksByUser);

    const pendingTasks = notFinishedTasks.map(task => (
        <TaskCardSmall key={task.id} task={task} />
    ));

    return (
        <main>
            <h1>Task details</h1>
            <section>
                <h2>Current task by {user}</h2>
                <TaskCardLarge task={task} />
            </section>
            <section>
                <h2>Pending tasks by {user}</h2>
                {pendingTasks}
            </section>
            <section>
                <h2>Finished tasks by {user}</h2>
                {finishedTasks}
            </section>
        </main>
    );
}
