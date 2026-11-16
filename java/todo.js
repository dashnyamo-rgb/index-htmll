const list = document.querySelector("#list");
const form = document.querySelector("#form");
const input = document.querySelector("#input");

const defaultTasks = [
  { id: 1, text: "Лекц унших", done: true },
  { id: 2, text: "Апп бичих", done: false },
];

function load() {
  try {
    return JSON.parse(localStorage.getItem("tasks")) ?? defaultTasks;
  } catch {
    return defaultTasks;
  }
}

let tasks = load();

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function render() {
  list.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.done) li.classList.add("done");
    li.addEventListener("click", () => toggleTask(task.id));

    const del = document.createElement("button");
    del.textContent = "✕";
    del.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteTask(task.id);
    });

    li.append(del);
    list.append(li);
  });
}

function toggleTask(id) {
  tasks = tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
  save();
  render();
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  save();
  render();
}

// Нэг удаа л холбоно
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return; // хоосон бол нэмэхгүй
  tasks.push({ id: Date.now(), text, done: false });
  input.value = "";
  save();
  render();
});

render();