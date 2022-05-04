import React, { useState } from "react";
export default function Demo({ data }) {
  const [title, setTitle] = useState("A");
  const [counter, setcounter] = useState(0);
  const arr = [5, 10, 15, 20];

  // const [firstData, secondData, thirdData] = arr;
  const todaysDate = new Date();
  //   interpolation
  return (
    <div>
      {/* <h1>{todaysDate.toString()}</h1> */}
      <h2>
        {data} {title}
      </h2>
      <h3 style={{ margin: "50px" }}>{counter}</h3>
      <button
        style={{ margin: "50px", cursor: "pointer" }}
        onClick={() => setcounter((prevState) => prevState + 1)}
      >
        {counter}
      </button>
      <button onClick={() => setcounter((prevState) => prevState + 100)}>
        +100
      </button>
    </div>
  );
}
