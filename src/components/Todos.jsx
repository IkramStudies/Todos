import React from "react";
import { useState } from "react";
const Todos = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [deletedTasks, setDeleted] = useState([]);
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
    setDeleted(tasks.filter((val) => val.id == id));
    setTasks(tasks.filter((val) => val.id != id));
  };
  const restoreTask = (id) => {
    setTasks([...tasks, ...deletedTasks]);
    setDeleted(deletedTasks.filter((val) => val.id != id));
  };
  const completed = (id) => {
    setTasks(
      tasks.map((val) =>
        val.id == id ? { ...val, completed: !val.completed } : val,
      ),
      // ? val.completed = true, I don't understand react state updated should be immutable
    );
  };
  const restore = (id) => {};
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
              <li
                className={val.completed ? "line-through mt-3" : "mt-3"}
                key={val.id}
              >
                {val.title}
              </li>
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
              <button
                className="border p-2 rounded-sm"
                onClick={() => completed(val.id)}
              >
                Completed{" "}
              </button>
            </>
          ),
        )}
      </ul>
      <div className="mt-10">
        Deleted
        <ul>
          {deletedTasks.map((val) => (
            <>
              <li className="pt-2">{val.title}</li>
              <button
                className="border p-2 rounded-sm mt-2"
                onClick={() => restoreTask(val.id)}
              >
                Restore
              </button>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
