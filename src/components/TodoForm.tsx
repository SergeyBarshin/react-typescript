import React, { useState } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(title);
      setTitle("");
    }
  };

  return (
    <div className="flex justify-center ">
      <input
        type="text"
        id="todo"
        placeholder="enter todo"
        className="rounded-l-full border-blue-100 px-5 py-2 placeholder-blue-300 focus:shadow-outline shadow-sm"
        value={title}
        onChange={changeHandler}
        onKeyPress={(e) => keyPressHandler(e)}
      />
      <button className="bg-blue-200 hover:bg-blue-100 px-3 rounded-r-full font-bold text-white shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};

export default TodoForm;
