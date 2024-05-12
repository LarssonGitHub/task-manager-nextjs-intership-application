import React, { useState, useEffect } from 'react';
import { fetchTasks } from '@/lib/api/fetchTasks';

interface Task {
  taskIsComplete: boolean;
}

interface WelcomeMessageProps {
  isAuthenticated: boolean;
}

interface computeTaskStatus {
  finished: number;
  pending: number;
}

function computeTaskStatus(tasks: Task[]): computeTaskStatus {
  return tasks.reduce((accumulator, task) => {
    if (task.taskIsComplete) {
      accumulator.finished++;
    } else {
      accumulator.pending++;
    }
    return accumulator;
  }, { finished: 0, pending: 0 });
}

export default function WelcomeMessage({ isAuthenticated }: WelcomeMessageProps) {
  const [taskStatus, setTaskStatus] = useState<computeTaskStatus | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (isAuthenticated) {
        const fetchedTasks = fetchTasks();
        const taskStatus = computeTaskStatus(fetchedTasks);
        setTaskStatus(taskStatus);
      }
    };

    fetchData();
  }, [isAuthenticated]);

  // If there is time, implement a welcome function
  // if (!isAuthenticated) {
  //   return (
  //     <div>
  //       <p>Welcome guest!</p>
  //     </div>
  //   );
  // }

  return (
    <div>
      <p>Welcome to your task manager!!</p>
      {taskStatus? (
        <p>Your team has fulfilled {(taskStatus.finished || "error")} tasks, and has {(taskStatus.pending || "error")} pending.</p>
      ) : (
        <p>Loading task status...</p>
      )}
    </div>
  );
}
