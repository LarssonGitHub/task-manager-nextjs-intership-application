"use client";

import React, { useState, useEffect } from 'react';
import ProtectedRoute from '@/components/protectedRoutes/ProtectedRoute';
import FilterContainer from '@/components/containers/dashboard/FilterContainer';
import LoggedUserContainer from '@/components/containers/dashboard/LoggedUserContainer';
import { fetchTasks } from '@/lib/api/fetchTasks';
import { fetchUsers } from '@/lib/api/fetchUsers';
import { sortTasksAfterFilter } from '@/lib/utils/dataAltering';
import TaskCardMedium from '@/components/cards/taskCards/TaskCardMedium';
import { removePendingTasks, removeFinishedTasks } from '@/lib/utils/dataAltering';

function Page() {
  const [tasks, setTasks] = useState<Tasks | null>(null);
  const [users, setUsers] = useState<Users | null>(null);
  const [filterQuery, setFilterQuery] = useState<FilterQuery>({} as FilterQuery);
  
  const getTasks = () => {
    const tasks = fetchTasks();
    setTasks(tasks);
    const users = fetchUsers();
    setUsers(users);
  }

  const filterTasks = () => {
    const data = fetchTasks()
    const sortedTasks = sortTasksAfterFilter(filterQuery, data);
    setTasks(sortedTasks);
  }

  useEffect(() => {
    getTasks()
  }, []);

  useEffect(() => {
    filterTasks()
  }, [filterQuery]);

  function resetOptions() {
    setFilterQuery({} as FilterQuery);
    getTasks()
  }

  if (!tasks) {
    return null;
  }

  const completedTasks = removePendingTasks(tasks);

  const finishedTasks = completedTasks.map(task => (
      <TaskCardMedium key={task.id} task={task} />
  ));

  const notFinishedTasks = removeFinishedTasks(tasks);

  const pendingTasks = notFinishedTasks.map(task => (
      <TaskCardMedium key={task.id} task={task} />
  ));

  return (
    <main>
      <div id='filter-user-wrapper'>
      <section>
        <h2>Filter by:</h2>
        <small>Filter by one condition, or filter by many conditions!</small>
        {/* TODO: Values are being reset, but selected option is not, will implement a function. */}
        <FilterContainer resetOptions={resetOptions} tasks={tasks} users={users} filterQuery={filterQuery} setFilterQuery={setFilterQuery}/>
      </section>
      <section id='logged-users-wrapper'>
      <h2>Users on your team</h2>
        <LoggedUserContainer users={users}/>
        </section>
        </div>
      {/* 
      TODO: if time, get the tasks you are working on.
      <section>
        <h1>Your pending tasks</h1>
        {listTasksCard}
      </section> */}
      <section>
      <h3>Your team's pending tasks</h3>
      <div className='card-container'>
        {pendingTasks}
      </div>
      </section>
      <section>
      <h3>Tasks fulfilled</h3>
      <div className='card-container'>
        {finishedTasks}
      </div>
      </section>
    </main>
  );
}

export default ProtectedRoute(Page);
