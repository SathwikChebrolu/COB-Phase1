let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskValue = taskInput.value.trim();

    if (taskValue !== '') {
        tasks.push({ name: taskValue, content: '' });
        updateTaskList();
        taskInput.value = '';
    }
}

function updateTaskList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        const taskItem = document.createElement('li');
        taskItem.className = 'list-group-item';
        
        const taskName = document.createElement('span');
        taskName.textContent = tasks[i].name;
        taskName.style.cursor = 'pointer';
        taskName.onclick = function() {
            showTaskContent(i);
        };

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm float-right';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            deleteTask(i);
        };

        taskItem.appendChild(taskName);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    }
}

function showTaskContent(index) {
    const task = tasks[index];
    const content = prompt(`Enter content for task "${task.name}"`, task.content);
    
    if (content !== null) {
        task.content = content;
        updateTaskList();
    }
}

function deleteTask(index) {

    tasks.splice(index, 1);

    updateTaskList();
}
