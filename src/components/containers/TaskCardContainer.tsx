import React from 'react';

interface TaskCardContainerProps {
    taskList: Tasks[];
}

// TODO implement children here to render the right card
export default function TaskCardContainer({ taskList }: TaskCardContainerProps) {
    if (!Array.isArray(taskList) ||!taskList.length) {
        return null;
    }
    // logic for card here or donT!
    // append card in return
    return (
        // TODO update after user
        // Or just append it here in jsx.
        // Or post this, but let the render of the cards be done in the map itslf, you just pass it down

        // Do note, when rendering in the map, only render what is asked.
        //         // SmallTaskCard, LargeTaskCard, etc
        
        // <li>{item.stuff || Error: data don't exist}</li>
        // Do not forget to destruct the parameters, so you don't need item.stuff 
        // rdContainer({ stuff, id, kiss }: TaskCardContainerProps)


        <div>
            {taskList.map((task, index) => (
                <pre key={index}>{JSON.stringify(task, null, 2)}</pre>
            ))}
        </div>
    );
}
