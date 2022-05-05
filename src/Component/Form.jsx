import React, { useState } from "react";
import "./Form.css";
export default function Form() {
  const [data, setData] = useState({
    name: "",
    regd: "",
    title: "",
    age: "",
    college: "",
  });
  const handleChange = (e) => {
    const stateValues = { ...data };
    stateValues[e.target.name] = e.target.value;
    console.log(stateValues);
    setData(stateValues);
  };
  // object destructuring
  // obj.name
  // {}
  // obj['name']

  const obj2 = {
    gender: "M",
    name: "1",
    regd: "2",
    title: "3",
    age: "4",
    college: "5",
  };

  const finalData = {
    ...obj2,
    gender: obj2.gender === "M" ? "Male" : "Female",
  };
  console.log(finalData);
  const { name, regd, title, age, college } = data;
  return (
    <div className="upperDiv">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            name="name"
            onChange={(e) => handleChange(e)}
            autoComplete="false"
            style={{ width: "100%", margin: "5px" }}
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="Regd.no"
            value={regd}
            name="regd"
            autoComplete="false"
            onChange={(e) => handleChange(e)}
            style={{ width: "100%", margin: "5px" }}
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            autoComplete="false"
            name="title"
            onChange={(e) => handleChange(e)}
            style={{ width: "100%", margin: "5px" }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="Age"
            value={age}
            autoComplete="false"
            name="age"
            onChange={(e) => handleChange(e)}
            style={{ width: "100%", margin: "5px" }}
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="College"
            value={college}
            name="college"
            autoComplete="false"
            onChange={(e) => handleChange(e)}
            style={{ width: "100%", margin: "5px" }}
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <button
            className="btn btn-primary"
            style={{ width: "100%", margin: "5px" }}
            onClick={() => {
              const value = { name, regd, age, college, title };
              console.log(value);
            }}
          >
            Save Data
          </button>
        </div>
      </div>
    </div>
  );
}
