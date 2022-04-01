import { Todo } from "./Todo";
import styles from "./todos.module.scss";

export function TodoList({
  todos,
  editing,
  toggleEditing,
  onEdit,
  onDelete,
  Item = Todo
}) {
  return (
    <ul className={styles.todos}>
      {todos.map(({ id, ...rest }) => (
        <Item
          key={id}
          id={id}
          {...rest}
          editing={editing === id}
          onEdit={onEdit}
          toggleEditing={toggleEditing}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
