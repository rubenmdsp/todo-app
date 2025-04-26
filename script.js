function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement('li');
    li.textContent = taskText;
    document.getElementById('task-list').appendChild(li);
    taskInput.value = "";
  }
}
