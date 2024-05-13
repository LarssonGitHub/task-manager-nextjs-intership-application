import React from 'react';

interface TaskCardMedium {
    task: Task;
}

export default function TaskCardLarge({task}: TaskCardMedium) {
  return (
    <section className="card-large">
      <h4>{task.taskName}</h4>
      <ul>
        <li>Status: {task.taskIsComplete? 'Completed' : 'Pending'}</li>
        <li>Importance: {task.importanceLevel}</li>
        <li>Start Date: {task.startDate}</li>
        <li>End Date: {task.estimatedEndDate}</li>
        <li>Category: {task.category}</li>
        <li>Created By: {task.byUser}</li>
        <li>Explanation: {task.taskExplanations}</li>
      </ul>
    </section>
  );
}
