document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task');
    const addTaskBtn = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            // Marking task as complete
            taskItem.addEventListener('click', function() {
                taskItem.classList.toggle('completed');
            });

            // Adding a delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-btn';
            deleteButton.addEventListener('click', function() {
                taskItem.remove();
            });

            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    }

    // Adding task when button is clicked
    addTaskBtn.addEventListener('click', addTask);

    // Adding task when enter button is pressed
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
