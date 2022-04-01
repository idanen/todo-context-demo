import "./styles.css";
import { TodosProvider } from "./contexts/TodosContext";
import { ConnectedTodos } from "./ConnectedTodos";

export default function App() {
  return (
    <div className="App">
      <h1>Todos app</h1>
      <main className="home">
        <TodosProvider>
          <ConnectedTodos />
        </TodosProvider>
      </main>
      {/* <ControlledTodos
        todos={todos}
        onAdd={addTodo}
        onEdit={editTodo}
        onDelete={deleteTodo}
      /> */}
    </div>
  );
}
