import React from "react";
import Select from "../inputs/Select";

export default function TaskCardFiltering() {
  const options = ["chocolate","cola", "fudge"];

  return (
    <div>
      <Select name={"category"} optionValues={options} />
      <Select name={"importaneLevel"} optionValues={options} />
      <Select name={"byUser"} optionValues={options} />
      <Select name={"byDte"} optionValues={options} />
    </div>
  );
}

// fetch of filters and categories > render options in dashboard
// call too filter function > select, any change will be registered and call the fetch
// calendar since you are using client anyway, just use state.
//

// Because I was a bit unsure how to handle next server components, when it comes to next.js, since I normally use a state and then pass it down with higher order-
// I turned everything client side, as I did not have time to experiment with server related stuff. Although, I know you can turn it into a use client and have it inside a server component
// I had problem passing it back, had trouble thinking about how to use the frontend hard coded values.