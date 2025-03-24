
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    taskList.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${task.content}</td>
        <td>${task.dueDate}</td>
        <td>${task.status}</td>
        <td>${task.assignedTo}</td>
        <td>
          <button class="edit" onclick="editTask(${index})">Edit</button>
          <button class="delete" onclick="deleteTask(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

document.getElementById('taskForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const content = document.getElementById('content').value;
  const dueDate = document.getElementById('dueDate').value;
  const status = document.getElementById('status').value;
  const assignedTo = document.getElementById('assignedTo').value;

  const newTask = { content, dueDate, status, assignedTo };
  tasks.push(newTask);

  saveTasks();
  renderTasks();
  e.target.reset();
});

function deleteTask(index) {
  if (confirm('Are you sure you want to delete this task?')) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }
}

function editTask(index) {
  const task = tasks[index];
  document.getElementById('content').value = task.content;
  document.getElementById('dueDate').value = task.dueDate;
  document.getElementById('status').value = task.status;
  document.getElementById('assignedTo').value = task.assignedTo;

  deleteTask(index);
}
renderTasks();
