import { useEffect, useRef } from "react";
import styles from "./todo.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export function Todo({
  id,
  todo,
  done,
  editing,
  toggleEditing,
  onEdit,
  onDelete
}) {
  const inputRef = useRef();

  useEffect(() => {
    if (editing) {
      inputRef.current.select();
    }
  }, [editing]);

  return (
    <li className={cx("todo", { show: editing })}>
      <input
        id={`todo-check-${id}`}
        name={`todo-${id}`}
        type="checkbox"
        onChange={() => onEdit({ id, done: !done })}
        checked={done}
      />
      {editing ? (
        <label htmlFor={`todo-edit-${id}`}>edit:</label>
      ) : (
        <label htmlFor={`todo-check-${id}`}>{todo}</label>
      )}
      <input
        ref={inputRef}
        id={`todo-edit-${id}`}
        defaultValue={todo}
        name="editing"
        className={cx("edit-input", { editing })}
      />
      <div className={cx("actions")}>
        <button type="button" onClick={() => toggleEditing(id)}>
          {editing ? "cancel" : "edit"}
        </button>
        <button type="button" onClick={() => onDelete({ id })}>
          delete
        </button>
      </div>
    </li>
  );
}
