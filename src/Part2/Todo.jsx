import React, { useState, useEffect } from "react";
import "./style.css";
function Todo() {
  useEffect(() => {
    const value = window.localStorage.getItem("data");
    if (value) {
      setTask(JSON.parse(value));
    } else {
      setTask([]);
    }
  }, []);

  const [task, setTask] = useState([]);
  const [data, setData] = useState("");

  const addTask = () => {
    const arr = [...task];
    arr.unshift({ todo: data, isCompleted: false });
    setTask(arr);
    setData("");
  };

  const changeStatus = (index) => {
    const arr = [...task];
    arr[index].isCompleted = !arr[index].isCompleted;
    setTask(arr);
  };

  const deleteTask = (index) => {
    const arr = [...task];
    arr.splice(index, 1);
    setTask(arr);
  };
  const saveUpdateData = () => {
    window.localStorage.setItem("data", JSON.stringify(task));
  };
  return (
    <div>
      <div className="todo_top">
        <input
          type="text"
          className="todo_input"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Add a Task"
        />
        <button onClick={addTask} className="btn btn-primary">
          + Add Task
        </button>
        <button
          onClick={() => saveUpdateData()}
          className="btn btn-primary"
          style={{ marginLeft: "10px" }}
        >
          + Save/Update My Data
        </button>
      </div>
      <div className="task_manager">
        <div className="tasks_parent">
          {task.map((value, index) => (
            <div className="tasks" key={index}>
              <div className="singleTask">
                {value.isCompleted ? (
                  <strike>{value.todo}</strike>
                ) : (
                  <span>{value.todo}</span>
                )}
              </div>
              <button className="markbtn" onClick={() => changeStatus(index)}>
                {value.isCompleted ? `Undone!!` : "Done!!"}
              </button>
              <button className="markbtn" onClick={() => deleteTask(index)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
