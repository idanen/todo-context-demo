export function AddForm({ onAdd }) {
  function onAddSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const todo = event.target.elements["new-todo"].value;

    if (todo) {
      onAdd(todo);
      form.reset();
    }
  }

  return (
    <form onSubmit={onAddSubmit}>
      <label htmlFor="a-new-todo">New todo: </label>
      <input
        id="a-new-todo"
        placeholder="what do you have to do?"
        name="new-todo"
      />
    </form>
  );
}
