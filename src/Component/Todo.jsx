import React, { useState } from "react";

export default function Todo() {
  const [data, setData] = useState([{ skill: "", year: "" }]);
  const handleAdd = () => {
    const arr1 = [...data];
    arr1.push({ skill: "", year: "" });
    setData(arr1);
  };

  const handleRemove = (index) => {
    console.log(index);
    const arr2 = [...data];
    arr2.splice(index, 1);
    setData(arr2);
  };

  const handleChange = (e, index) => {
    const clonedArray = [...data];
    clonedArray[index][e.target.name] = e.target.value;
    setData(clonedArray);
  };

  return (
    <div style={{ margin: "50px" }}>
      <button className="btn btn-primary" onClick={handleAdd}>
        + Add
      </button>
      {data.map((value, index) => (
        <div key={index}>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <input
                type="text"
                className="form-control"
                style={{ width: "100%", margin: "5px" }}
                value={value.skill}
                placeholder="Skill"
                name="skill"
                onChange={(e) => handleChange(e, index)}
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <input
                type="text"
                className="form-control"
                style={{ width: "100%", margin: "5px" }}
                value={value.year}
                placeholder="Year"
                name="year"
                onChange={(e) => handleChange(e, index)}
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <button
                className="btn btn-primary"
                style={{ width: "100%", margin: "5px" }}
                onClick={() => handleRemove(index)}
              >
                - Remove
              </button>
            </div>
            <hr />
          </div>
        </div>
      ))}
      <button
        className="btn btn-primary"
        style={{ margin: "5px" }}
        onClick={() => console.log(data)}
      >
        Save
      </button>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
