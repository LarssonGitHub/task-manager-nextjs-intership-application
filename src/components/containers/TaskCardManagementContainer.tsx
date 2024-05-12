"use client";

import React from "react";
import { useState, useEffect } from "react";
import { getTasks } from "@/auth/taskAutehticaion";
import TaskCardFiltering from "../filters/TaskCardFiltering";
import TaskCardContainer from "./TaskCardContainer";

export default function TaskCardManagementContainer() {
  const [taskList, setTaskList] = useState<Tasks[]>([]);
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    // TODO when backend is implement, add security such as token check before fetching from backend
    const fetchedTasks: Task[] = getTasks();
    setTaskList(fetchedTasks);
  }, [filterList]);

  return (
    <div>
      {/* TODO These should be imported into dashboard instead! unless you say fuck state, then again, page is already use client */}
      <TaskCardFiltering />
      <TaskCardContainer taskList={taskList} />
    </div>
  );
}
