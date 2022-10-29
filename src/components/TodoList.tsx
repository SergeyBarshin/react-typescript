import React from "react";
import { ITodo } from "./interfaces";
import { TrashIcon } from "@heroicons/react/24/solid";

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="bg-white mt-5 p-4 rounded-lg shadow-lg">
      <ul>
        {todos.map((todo) => {
          const classes = [""];
          if (todo.completed) {
            classes.push(" line-through");
          }
          return (
            <li className="mb-2" key={todo.id}>
              <label className="flex items-center justify-items-center space-x-6 cursor-pointer p-3 bg-blue-50 w-full rounded-md">
                <input
                  type="checkbox"
                  className="color-blue-100 checked:bg-blue-300 "
                  checked={todo.completed}
                  onChange={onToggle.bind(null, todo.id)}
                />
                <span className={classes.join(" ")}>{todo.title}</span>
                <TrashIcon
                  className="h-6 w-6 text-red-300 hover:text-red-400"
                  onClick={() => onRemove(todo.id)}
                />
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
