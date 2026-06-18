import React from "react";
import { useState } from "react";
const Todos = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [deletedTasks, setTask] = useState([]);
  const [editMode, setMode] = useState(false);
  const [editText, setText] = useState("");
  const [editId, setId] = useState("");
  const addTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title: input, id: Date.now(), completed: false }]);
    setInput("");
  };
  const saveTask = (id) => {
    setTasks(
      tasks.map((val) => (val.id == id ? { ...val, title: editText } : val)),
    );
    setMode(false);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((val) => val.id != id));
  };
  return (
    <div className="">
      <input
        type="text "
        className="h-6 w-40 border rounded-sm"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        className="text-[12px] ml-2 border p-1 rounded-sm"
        onClick={addTask}
      >
        Add Task
      </button>
      <ul className="pt-6">
        {tasks.map((val) =>
          editMode && val.id == editId ? (
            <>
              <div>
                <input
                  type="text"
                  onChange={(e) => setText(e.target.value)}
                  value={editText}
                />
                <button className="border" onClick={() => saveTask(val.id)}>
                  Save Task
                </button>
              </div>
            </>
          ) : (
            <>
              <li className="mt-3">{val.title}</li>
              <button
                className="border p-2 rounded-sm "
                onClick={() => {
                  setMode(true);
                  setId(val.id);
                }}
              >
                Edit Task
              </button>
              <button
                className="border p-2 rounded-sm"
                onClick={() => deleteTask(val.id)}
              >
                Delete Task
              </button>
              <button className="border p-2 rounded-sm">Completed </button>
            </>
          ),
        )}
      </ul>
      <div className="mt-10">
        Deleted
        <ul></ul>
      </div>
    </div>
  );
};

export default Todos;
