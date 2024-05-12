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
    hi {id}

    {/* Params > userID and taskID > do parallel fetch > render both > render two cards, one bigger, 
    one larger. You need to reuse <components styleName={
      
    }></components>
    (async () => {
    const urls = [
        "https://example.com/data1",
        "https://example.com/data2"
    ];

    const promises = urls.map((url) =>
        fetch(url).then((response) => response.json()).catch((error) => {
            console.error(`Failed to fetch ${url}: `, error);
            return null; // Return null or a default value to prevent rejection
        })
    );

    try {
        const data = await Promise.all(promises);
        console.log(data);
    } catch (error) {
        console.error("An error occurred during fetching:", error);
    }
})();


    */}

    {/* fetch card after id > if fail display error 404 > if found > render the card and info > then do another fetch where you fetch all cards rrelated to that user and display it below the first card. 
    */}
    </div>
  );
}