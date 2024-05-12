import React, { useState, useEffect } from 'react';
import { fetchTasks } from '@/lib/api/fetchTasks';
import { calculateTaskStatuses } from '@/lib/utils/dataAltering';

export default function WelcomeMessage({ isAuthenticated }: WelcomeMessageProps) {
  const [taskStatus, setTaskStatus] = useState<computeTaskStatus | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      const tasks = fetchTasks();
      const taskStatuses = calculateTaskStatuses(tasks);
      setTaskStatus(taskStatuses);
    }
  }, [isAuthenticated]);

  // TODO If there is time, implement a welcome function for user by cookies
  // if (!isAuthenticated) {
  //   return (
  //       <p>Welcome {guests || user}</p>
  //   );
  // }

  if (!taskStatus ||!isAuthenticated) return null;

  return (
    <p>Your team has fulfilled {(taskStatus.finished)} tasks, and has {(taskStatus.pending)} pending.</p>
  );
}
