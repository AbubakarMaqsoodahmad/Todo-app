"use client";
import { useState } from "react";

export default function FirstPost() {
  const [tasks, setTasks] = useState<{ text: string; isDone: boolean }[]>([]);
  const [taskInput, setTaskInput] = useState<string>('');

  const handleDoneClick = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isDone = !updatedTasks[index].isDone;
    setTasks(updatedTasks);
  };

  const inputPlaceholderStyle = (isDone: boolean) => ({
    textDecoration: isDone ? 'line-through' : 'none',
  });

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { text: taskInput, isDone: false }]);
      setTaskInput('');
    }
  };

  const removeTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (<>
    <div className=" flex bg-slate-400 rounded-md p-5 sm:w-auto shadow-lg mt-4 justify-around transition ease-in-out delay-150 ">
      <div className="container   ">
        <h1 className="text-2xl m  font-bold  mb-4">To-Do List</h1>

        <div className="flex space-x-10">
          <input
            className="w-60 p-2 text-xl font-sans font-medium  text-gray-900 border hover:bg-slate-200 rounded-md translate-x-2 scale-110 duration-150  hover:focus"
            type="text"
            placeholder="Enter a task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button type="button" onClick={addTask} className="px-5 py-1  bg-black  hover:translate-x-1 scale-110 hover:bg-slate-500 font-medium text-white rounded">
            Add
          </button>
        </div>

        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="flex w-auto justify-center font-medium items-center -translate-x-1  mt-1 space-x-2 p-2">
              <div
                className="w-60 px-2 py-1 text-xl  text-gray-900 bg-white border rounded"
                style={inputPlaceholderStyle(task.isDone)}
              >
                {task.text}
              </div>
              <button
                onClick={() => removeTask(index)}
                className="px-2 py-1 bg-black hover:translate-x-1 scale-110 hover:bg-slate-500 text-white rounded"
              >
                Remove
              </button>
              <button
                onClick={() => handleDoneClick(index)}
                className="px-2 py-1 bg-black  hover:translate-x-1 scale-110 hover:bg-slate-500 text-white rounded"
              >
                Done
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  </>
  );
}
