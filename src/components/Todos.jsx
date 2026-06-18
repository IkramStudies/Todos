import React from "react";
import { useState } from "react";
const Todos = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    setTasks([{ ...tasks, title: input, id: Date.now(), completed: false }]);
  };
  return (
    <div className="">
      <div className="flex justify-center ">
        <input
          type="text "
          className="h-6 w-40 border rounded-sm"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="text-[12px] ml-2 border p-1 rounded-sm"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <div className="flex max-sm:flex-wrap gap-40 mt-10">
        <div>Completed</div>
        <div>
          In Queue
          <ul className="flex gap-6 pt-6">
            {tasks.map((val) => (
              <>
                <li>{val.title}</li>
                <button className="border p-2 rounded-sm ">Edit Task</button>
                <button className="border p-2 rounded-sm">Delete Task</button>
                <button className="border p-2 rounded-sm">Completed </button>
              </>
            ))}
          </ul>
        </div>
        <div>Deleted</div>
      </div>
    </div>
  );
};

export default Todos;
