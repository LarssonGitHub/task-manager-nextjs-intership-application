import React from 'react';
import { useRouter } from 'next/navigation';

interface TaskCardMedium {
  task: Task;
}

export default function TaskCardSmall({ task }: TaskCardMedium) {
const router = useRouter(); 
const fetchCard = (id: number) => {
  router.push(`/${id}`);
};
return (
  <section className="card" onClick={() => fetchCard(task.id)}>
    <h4>{task.taskName}</h4>
    <ul>
      <li>Status: {task.taskIsComplete? 'Completed' : 'Pending'}</li>
      <li>Importance: {task.importanceLevel}</li>
      <li>Start Date: {task.startDate.toDateString()}</li>
      <li>End Date: {task.estimatedEndDate.toDateString()}</li>
    </ul>
  </section>
);
}