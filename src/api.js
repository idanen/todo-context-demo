const storageKey = "app-todos";

export function uuid() {
  return Math.random().toString(32).slice(2);
}

export function persist(todos) {
  return new Promise((resolve) => {
    window.localStorage.setItem(storageKey, JSON.stringify(todos));
    resolve({ success: true });
  });
}

export function read() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const todos = JSON.parse(
          window.localStorage.getItem(storageKey) || "[]"
        );
        resolve(todos);
      } catch (err) {
        reject(err);
      }
    }, 300);
  });
}
