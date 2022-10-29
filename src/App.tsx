import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import Logo from "./components/Logo";
import TodoList from "./components/TodoList";
import { ITodo } from "./components/interfaces";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    console.log("Add new Todo", title);
    const newTodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    // setTodos([newTodo, ...todos]);
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          console.log(todo.completed);

          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-blue-300 flex flex-col justify-center items-center">
      {/*<Navbar />
      >*/}
      <Logo />
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onRemove={removeHandler}
        onToggle={toggleHandler}
      />
    </div>
  );
};

export default App;
