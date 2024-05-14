"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { fetchTaskById, fetchAllTasksByUser } from '@/lib/api/fetchTasks';
import { removePendingTasks, removeFinishedTasks } from '@/lib/utils/dataAltering';
import TaskCardLarge from '@/components/cards/taskCards/TaskCardLarge';
import TaskCardSmall from '@/components/cards/taskCards/TaskCardSmall';
import ProtectedRoute from '@/components/protectedRoutes/ProtectedRoute';

type Props = {
    params: { taskID: string },
    searchParams: {}
};

function Page({ params }: Props) {
    const [task, setTask] = useState<Task | null>(null);
    const [otherTasksByUser, setOtherTasksByUser] = useState<Tasks | null>(null);
    const [user, setUser] = useState<string>("User");

    // TODO is it worth to make this into a hook?
    // TODO implement error handling
    const setTaskCard = (task: Task) => {
        setUser(task.byUser);
        setTask(task);
    }
    
    const setTaskCards = (tasks: Tasks) => {
        setOtherTasksByUser(tasks);
    }

    const fetchTaskAfterParams = () => {
        const taskData = fetchTaskById(params.taskID);
        if (!taskData) return;
        const tasksByUser = fetchAllTasksByUser(taskData.byUser);
        setTaskCard(taskData)
        setTaskCards(tasksByUser);
    }
    
    useEffect(() => {
        fetchTaskAfterParams();
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
                <h3>Pending tasks by {user}</h3>
                <div className='card-container'>
                    {pendingTasks}
                </div>
            </section>
            <section>
                <h3>Finished tasks by {user}</h3>
                <div className='card-container'>
                    {finishedTasks}
                </div>
            </section>
        </main>
    );
}

export default ProtectedRoute(Page);
