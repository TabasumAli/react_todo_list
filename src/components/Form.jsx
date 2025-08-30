import React, { useState } from "react";
import styles from "./form.module.css";

function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({name: "", done:false});

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name: "", done:false});
    // console.log(todos);
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputcont}>
        <input
          className={styles.moderninput}
          onChange={(e) => {
            setTodo({name: e.target.value, done:false});
          }}
          type="text"
          value={todo.name}
          placeholder="Enter todo name"
        />
        <button className={styles.modernbtn} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;
