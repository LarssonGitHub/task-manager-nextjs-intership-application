import React from 'react';
import { useRouter } from 'next/navigation';

interface TaskCardMedium {
  task: Task;
}

export default function TaskCardSmall({ task }: TaskCardMedium) {
const router = useRouter(); 
const fetchCard = (id: number) => {
window.location.href = `/${id}`
};
return (
  <section className="card" onClick={() => fetchCard(task.id)}>
    <h4>{task.taskName}</h4>
    <ul>
      <li>Status: {task.taskIsComplete? 'Completed' : 'Pending'}</li>
      <li>Importance: {task.importanceLevel}</li>
      <li>Start Date: {task.startDate}</li>
      <li>End Date: {task.estimatedEndDate}</li>
    </ul>
  </section>
);
}