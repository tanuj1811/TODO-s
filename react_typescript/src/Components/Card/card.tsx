/** @format */

import React from "react";
import "./card.css";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { TODO } from "../../model";

interface Props {
  TODOS: TODO[];
  todo: TODO;
  setTODOS: React.Dispatch<React.SetStateAction<TODO[]>>;
}

const Card: React.FC<Props> = ({ todo, TODOS, setTODOS }) => {
  const handleDone = (id: number): void => {
    const newTodos = TODOS.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTODOS(newTodos);
  };

  const handleDel = (id: number): void => {
    const newTodos = TODOS.filter((todo) => todo.id !== id);
    setTODOS(newTodos);
  };

  const handleEdit = (id: number): void => {
    const newTodos = TODOS.map((todo) => {
      if (todo.id === id && !todo.isDone) {
        todo.todo = prompt("Enter new todo", todo.todo) || todo.todo;
      }
      return todo;
    });
    setTODOS(newTodos);
  };

  return (
    <form className={`todo_card ${todo.isDone?'success': ""}`}>
      <span className="desc">{todo.todo}</span>
      <div className="icons">
        {!todo.isDone && <span className="icon" onClick={() => handleEdit(todo.id)}>
          <AiFillEdit />
        </span>}
        <span className="icon" onClick={() => handleDel(todo.id)}>
          <AiFillDelete />
        </span>
        {todo.isDone ? (
          <span className="icon" onClick={() => handleDone(todo.id)}>
            <IoCheckmarkDoneSharp />
          </span>
        ) : (
          <span className="icon" onClick={() => handleDone(todo.id)}>
            <MdDone />
          </span>
        )}
      </div>
    </form>
  );
};

export default Card;
