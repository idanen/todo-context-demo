import { createContext, useState, useEffect, useContext } from "react";
import { read, persist, uuid } from "../api";

const Context = createContext();

export function TodosProvider({ children }) {
  const context = useTodos();
  const [editing, setEditing] = useState(null);

  const done = context.todos.filter(({ done }) => done);
  const pending = context.todos.filter(({ done }) => !done);

  function toggleEditing(id) {
    setEditing((prev) => (prev ? null : id));
  }

  const extendedContext = {
    ...context,
    editing,
    setEditing,
    toggleEditing,
    done,
    pending
  };

  return (
    <Context.Provider value={extendedContext}>{children}</Context.Provider>
  );
}

export function useContextTodos() {
  return useContext(Context);
}

export function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    read()
      .then(setTodos)
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    persist(todos);
  }, [todos]);

  function addTodo(todo) {
    if (todo) {
      setTodos((prev) => [...prev, { id: uuid(), todo, done: false }]);
    }
  }

  function deleteTodo({ id }) {
    setTodos((prev) => prev.filter((task) => task.id !== id));
  }

  function editTodo({ id, ...updates }) {
    setTodos((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return { ...task, ...updates };
        }
        return task;
      })
    );
  }

  return { todos, addTodo, deleteTodo, editTodo };
}
