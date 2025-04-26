import React from "react";
import classNames from "classnames";
import "./TodoList.css";

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul>
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames("TodoList__item", {
          "TodoList__item--completed": completed,
        })}
      >
        <input
          type="checkbox"
          className="TodoList__checkbox"
          checked={completed} // в момент клика Браузер сам «переключает» внутреннее свойство input.checked на противоположное (из false → true, или наоборот).
          onChange={() => onToggleCompleted(id)} // браузер генерирует событие и React вызывает  обработчик
        />

        <p className="TodoList__text">{text}</p>
        <button
          type="button"
          className="TodoList__btn"
          onClick={() => onDeleteTodo(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
