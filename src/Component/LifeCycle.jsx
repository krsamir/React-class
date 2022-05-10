import React, { useEffect, useState } from "react";

const log = console.log;
export default function LifeCycle() {
  const [data, setData] = useState("Render");
  const [data1, setData1] = useState("Render");
  useEffect(() => {
    log(1);
    // return () => {
    // componentDidMount
    //   log("unmount");
    // };
  }, []);
  // Dependency Array
  // Useffect is dependent on the variables passed into this array.
  // If the passed values are changing, so simply treat
  //  useEffect as componentDidUpdate
  log(2);
  return (
    <div>
      <button className="btn btn-primary" onClick={() => setData("Rendered")}>
        Click Me
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setData1("Re-Rendered")}
      >
        Click Me twice
      </button>
      <h3>{data}</h3>
      <h3>{data1}</h3>
    </div>
  );
}
