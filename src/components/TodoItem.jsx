const TodoItem = ({ todo, index, removeTodo, completeTodo }) => {
  return (
    <>
      <div className="flex  bg-gray-200 rounded-lg p-3  hover:bg-gray-300 transtion duration-300 ease-in-out">
        <span
          className={`flex-1 items-center text-lg ${
            todo.completed ? "line-through" : ""
          }`}
          onClick={() => completeTodo(index)}
        >
          {todo.name}
        </span>
        <button
          onClick={() => removeTodo(index)}
          className="py-1 px-5 bg-gray-300 text-black items-center cursor-pointer rounded-lg"
        >
          ❌
        </button>
      </div>
    </>
  );
};

export default TodoItem;
