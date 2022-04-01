import { ControlledTodos } from "./ControlledTodos";
import { useContextTodos } from "./contexts/TodosContext";

export function ConnectedTodos() {
  const { todos, addTodo, editTodo, deleteTodo } = useContextTodos();

  return (
    <ControlledTodos
      todos={todos}
      onAdd={addTodo}
      onEdit={editTodo}
      onDelete={deleteTodo}
    />
  );
}
