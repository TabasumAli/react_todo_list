import React from "react";
import styles from "./todoitem.module.css";

function TodoItem({ item, todos, setTodos }) {
  function handleDel(item) {
    // todos = todos.filter((todo) => todo !== item);
    setTodos(todos.filter((todo) => todo !== item)); 

    console.log("del btn clicked", item);
  }

  function handleClick(name) {
    console.log("Item clicked", name);
    
    setTodos(todos.map((todo)=> todo.name === name ? {...todo, done : !todo.done}: todo ));
    // console.log(todos);
  }

  const className = item.done ? styles.completed:"" ;

  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        <span
          onClick={() => {
            handleClick(item.name);
          }} className={className}
        >
          {item.name}{" "}
        </span>
        <span>
          <button
            onClick={() => {
              handleDel(item);
            }}
            className={styles.delbtn}
          >
            Del
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}

export default TodoItem;
