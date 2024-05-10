import React from 'react';

// Define the props interface
type Props = {
    params: { taskID: string }, 
    searchParams: {}
}

export default function page({params}: Props) {
    const id: string = params.taskID
  return (
    <div>
     {id}
    </div>
  );
}