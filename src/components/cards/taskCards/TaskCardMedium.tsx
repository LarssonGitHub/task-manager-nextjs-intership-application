import React from 'react';
import { useRouter } from 'next/navigation';

interface TaskCardMediumProps {
  task: Task;
}

export default function TaskCardMedium({ task }: TaskCardMediumProps) {
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
        <li>Category: {task.category}</li>
        <li>Created By: {task.byUser}</li>
      </ul>
    </section>
  );
}
