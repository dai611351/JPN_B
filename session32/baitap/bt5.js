function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const task = taskInput.value.trim();

    if (task === "") {
        alert("Vui lòng nhập nhiệm vụ!");
        return;
    }
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        <span>${task}</span>
        <button class="delete-btn" onclick="deleteTask(this)">X</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';
}
function deleteTask(button) {
    if (confirm("Bạn có chắc muốn xóa nhiệm vụ này không?")) {
        const taskItem = button.parentElement;
        taskItem.remove();
    }
}