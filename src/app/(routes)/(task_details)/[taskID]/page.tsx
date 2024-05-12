"use client";

import React, { useState, useEffect } from 'react';
import { fetchTaskById, fetchAllTasksByUser } from '@/lib/api/fetchTasks';

type Props = {
    params: { taskID: string },
    searchParams: {}
};

export default function Page({ params }: Props) {
    const [task, setTask] = useState<Task | null>(null);
    const [otherTasksByUser, setOtherTasksByUser] = useState<Tasks | null>(null);
    const [user, setUser] = useState<string>("User");

    // TODO make this into a hook
    useEffect(() => {
        // TODO: Do a parallel fetch, if it is async in the future, work with promise.all(),
        const taskData = fetchTaskById(params.taskID);
        // TODO: If time, implement better error handling in case user directly goes via URL
        if (!taskData) throw new Error("Ops, it's empty here, no such ID exists");
        const tasksByUser = fetchAllTasksByUser(taskData.createdBy);
        setUser(taskData.createdBy);
        setTask(taskData);
        setOtherTasksByUser(tasksByUser);
    }, []);

    if (!task ||!otherTasksByUser) {
        return <div><p>Loading tasks by user</p></div>;
    }

    // TODO: Add logic for finished and unfinished and clean up this
    const listTasksCard = otherTasksByUser.map((task, index) =>
        <pre key={index}>{JSON.stringify(task, null, 2)}</pre>
    );

    console.log(listTasksCard);

    const currentTaskCard = <pre>{JSON.stringify(task, null, 2)}</pre>;

    return (
        <main>
            <section>
                <h2>Current task by {user}</h2>
                {currentTaskCard}
            </section>
            <section>
                <h2>Pending tasks by {user}</h2>
                {listTasksCard}
            </section>
            <section>
                <h2>Finished tasks by {user}</h2>
                {listTasksCard}
            </section>
        </main>
    );
}
