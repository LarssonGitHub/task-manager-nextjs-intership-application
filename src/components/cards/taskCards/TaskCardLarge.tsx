import React from 'react';

interface TaskCardMedium {
    task: Task;
}

export default function TaskCardLarge({task}: TaskCardMedium) {
  return (
    <section className="card">
      <h4>{task.taskName}</h4>
      <ul>
        <li>Status: {task.taskIsComplete? 'Completed' : 'Pending'}</li>
        <li>Importance: {task.importanceLevel}</li>
        <li>Start Date: {task.startDate.toDateString()}</li>
        <li>End Date: {task.estimatedEndDate.toDateString()}</li>
        <li>Category: {task.category}</li>
        <li>Created By: {task.createdBy}</li>
        <li>Explanation: {task.taskExplanations}</li>
      </ul>
    </section>
  );
}
