import { AddForm } from "./components/AddForm";
import { Todo } from "./components/Todo";
import { TodoLists } from "./components/TodoLists";

function noop() {}

export function ControlledTodos({
  todos = [],
  onAdd = noop,
  onEdit = noop,
  onDelete = noop,
  Item = Todo
}) {
  return (
    <>
      <AddForm onAdd={onAdd} />
      <TodoLists
        todos={todos}
        onEdit={onEdit}
        onDelete={onDelete}
        Item={Item}
      />
    </>
  );
}
