import React from "react";
import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo)=> todo.done).length;
  const totalTodos = todos.length;
  // states

  // form submit handler

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos}/>
      {/* <h1>{completedTodos}</h1>
       */}
       <Footer completedTodos ={completedTodos} totalTodos = {totalTodos}/>
    </div>
  );
}

export default Todo;
