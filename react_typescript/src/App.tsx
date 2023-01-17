/** @format */

import React, { useEffect, useState } from "react";
import "./App.css";

import { InputField, TodoList } from "./Components";
import { TODO } from "./model";

function App(): React.ReactElement {
  const [todo, setTodo] = useState<string>("");
  const [TODOS, setTODOS] = useState<TODO[]>(
    JSON.parse(localStorage.getItem("TODOS") || "[]")
  );
  const [name, setName] = useState<string>(
    localStorage.getItem("nameTODO") || ""
  );

  const addTodo = (e: React.FormEvent): void => {
    e.preventDefault();

    if (todo.trim().length === 0) {
      return;
    }

    const newTodo: TODO = {
      id: new Date().getTime(),
      todo: todo,
      isDone: false,
    };

    setTODOS([...TODOS, newTodo]);
    setTodo("");
  };

  function handleName(): void {
    if (name === "") {
      const nam = prompt("Enter your name", "");
      if (nam) {
        setName(nam);
      } else {
        setName("Stylumia");
      }
    }
    localStorage.setItem("nameTODO", name);
  }

  useEffect(() => {
    handleName();
  }, []);

  useEffect(() => {
    localStorage.removeItem("TODOS");
    localStorage.setItem("TODOS", JSON.stringify(TODOS));
  }, [TODOS]);

  return (
    <div className="App">
      <span className="heading"> {name} Todo </span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        addTodo={addTodo}
        TODOS={TODOS}
      />
      <TodoList TODOS={TODOS} setTODOS={setTODOS} />
    </div>
  );
}

export default App;
