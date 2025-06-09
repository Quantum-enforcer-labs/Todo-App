import { useState } from "react";
import TodoWrapper from "./TodoWrapper";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    const newTodos = [
      ...todos,
      { id: new Date(), name: text, completed: false },
    ];
    setTodos(newTodos);
  };
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoWrapper addTodo={addTodo} />

      <div className="mt-8 bg-white mx-5 rounded-lg p-4">
        <div className="space-y-3">
          {todos.map((todo, index) => (
            <TodoItem
              todo={todo}
              index={index}
              key={todo.id}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoApp;
