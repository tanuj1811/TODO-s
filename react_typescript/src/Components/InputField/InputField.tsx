/** @format */

import React, { useRef } from "react";
import { TODO } from "../../model";

import "./InputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (e: React.FormEvent) => void;
  TODOS: TODO[];
}

const InputField: React.FC<Props> = ({ todo, setTodo, addTodo, TODOS }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        className="todo_form"
        onSubmit={(e) => {
          addTodo(e);
          inputRef.current?.blur();
        }}
      >
        <input
          ref={inputRef}
          className="input"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter your todo"
        />
        <button className="add" type="submit">
          Add
        </button>
      </form>

    </>
  );
};

export default InputField;
