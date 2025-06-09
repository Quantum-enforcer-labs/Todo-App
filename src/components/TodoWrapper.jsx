import { useState } from "react";

const TodoWrapper = ({ addTodo }) => {
  const [text, setText] = useState("");
  const handleSubmit = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };
  return (
    <>
      <div className=" mx-5 flex p-4 rounded-lg space-x-3 justify-between bg-stone-300">
        <input
          type="text"
          placeholder="Type a Task ..."
          className="flex-1 rounded-lg p-3 placeholder:italic border-none focus:outline-none bg-white"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-blue-500 rounded-lg text-white font-bold py-2 px-8 hover:bg-blue-600 transition duration-300 ease-in-out"
          onClick={handleSubmit}
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default TodoWrapper;
