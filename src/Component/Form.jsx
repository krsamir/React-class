import React, { useState } from "react";
import "./Form.css";
export default function Form() {
  const [name, setName] = useState("");
  const [regd, setRegd] = useState("");
  const [title, setTitle] = useState("");
  const [age, setAge] = useState("");
  const [college, setCollege] = useState("");
  return (
    <div className="upperDiv">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="false"
      />
      <input
        type="text"
        placeholder="Regd.no"
        value={regd}
        autoComplete="false"
        onChange={(e) => setRegd(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        autoComplete="false"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        autoComplete="false"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="College"
        value={college}
        autoComplete="false"
        onChange={(e) => setCollege(e.target.value)}
      />
      <button
        onClick={() => {
          const data = { name, regd, age, college, title };
          console.log(data);
        }}
      >
        Save Data
      </button>
    </div>
  );
}
