"use client";

import React, { useState, useEffect } from 'react';
import { fetchTasks } from '@/lib/api/fetchTasks';
import ProtectedRoute from '@/components/protectedRoutes/ProtectedRoute';
import FilterContainer from '@/components/containers/FilterContainer';
import LoggedUserContainer from '@/components/containers/LoggedUserContainer';
import { fetchUsers } from '@/lib/api/fetchUsers';

// Your functional component
function Page() {
  const [tasks, setTasks] = useState<Tasks | null>(null);
  const [users, setUsers] = useState<Users | null>(null);

  useEffect(() => {
    const tasks = fetchTasks();
    setTasks(tasks);
    const users = fetchUsers();
    setUsers(users);
  }, []);

  if (!tasks) {
    return <div><p>Loading tasks by user</p></div>;
  }

  // TODO reuse these components!
  const listTasksCard = tasks.map((task, index) =>
    <pre key={index}>{JSON.stringify(task, null, 2)}</pre>
  );

  return (
    <main>
      <section>
        <h2>Filter by:</h2>
        <FilterContainer tasks={tasks} users={users}/>
      </section>
      <h2>Users on your team</h2>
      <dl>
        <LoggedUserContainer users={users}/>
      </dl>
      <section>
        <h1>Your pending tasks</h1>
        {listTasksCard}
      </section>
      <section>
        <h2>Your team's pending tasks</h2>
        {listTasksCard}
      </section>
      <section>
        <h2>Tasks fulfilled</h2>
        {listTasksCard}
      </section>
    </main>
  );
}

export default ProtectedRoute(Page);
