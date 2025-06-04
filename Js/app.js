// Select DOM elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const deleteCompletedBtn = document.getElementById('delete-completed');

// Add new task on form submit
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

// Function to add a task to the list
function addTask(text) {
    // Create list item
    const li = document.createElement('li');
    li.className = 'task-item list-group-item d-flex justify-content-between align-items-center';

    // Create span for task text
    const span = document.createElement('span');
    span.textContent = text;
    span.style.cursor = 'pointer';

    // Create delete button (hidden by default)
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'btn btn-sm btn-danger ml-2';
    deleteBtn.style.display = 'none';

    // Toggle completed state on span click
    span.addEventListener('click', function () {
        li.classList.toggle('completed');
        if (li.classList.contains('completed')) {
            deleteBtn.style.display = 'inline-block';
        } else {
            deleteBtn.style.display = 'none';
        }
    });

    // Delete this task on delete button click
    deleteBtn.addEventListener('click', function () {
        li.remove();
    });

    // Append elements
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// Delete all completed tasks
deleteCompletedBtn.addEventListener('click', function () {
    const completedTasks = document.querySelectorAll('#task-list .completed');
    completedTasks.forEach(task => task.remove());
});