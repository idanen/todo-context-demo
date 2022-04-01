import { useState } from "react";
import { TodoList } from "./TodoList";
import { Todo } from "./Todo";

export function TodoLists({ todos, onEdit, onDelete, Item = Todo }) {
  const [editing, setEditing] = useState(null);

  const done = todos.filter(({ done }) => done);
  const pending = todos.filter(({ done }) => !done);

  function toggleEditing(id) {
    setEditing((prev) => (prev ? null : id));
  }

  function onEditSubmit(event) {
    event.preventDefault();

    if (!editing) {
      return;
    }

    const newValue = event.target.elements.editing.value;
    onEdit({ id: editing, todo: newValue });
    setEditing(null);
  }

  const sharedProps = {
    Item,
    editing,
    onEdit,
    toggleEditing,
    onDelete
  };

  return (
    <form onSubmit={onEditSubmit}>
      <fieldset>
        <legend>Todos</legend>
        <TodoList {...sharedProps} todos={pending} />
      </fieldset>
      <fieldset>
        <legend>Done</legend>
        <TodoList {...sharedProps} todos={done} />
      </fieldset>
    </form>
  );
}
