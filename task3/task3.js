document.addEventListener('DOMContentLoaded', function () {
    
    let tasks = [];
  
    
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const pendingTasksList = document.getElementById("pendingTasks");
    const completedTasksList = document.getElementById("completedTasks");
  
    
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText !== "") {
        tasks.push({ text: taskText, completed: false });
        displayTasks();
        taskInput.value = "";
      }
    }
  
    
    function displayTasks() {
      pendingTasksList.innerHTML = "";
      completedTasksList.innerHTML = "";
  
      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
          <button class="completeBtn">Complete</button>
          <button class="editBtn">Edit</button>
          <button class="deleteBtn">Delete</button>
        `;
  
        const completeBtn = li.querySelector('.completeBtn');
        const editBtn = li.querySelector('.editBtn');
        const deleteBtn = li.querySelector('.deleteBtn');
  
        completeBtn.addEventListener('click', () => completeTask(index));
        editBtn.addEventListener('click', () => editTask(index));
        deleteBtn.addEventListener('click', () => deleteTask(index));
  
        if (task.completed) {
          completedTasksList.appendChild(li);
        } else {
          pendingTasksList.appendChild(li);
        }
      });
    }
  
    function completeTask(index) {
      tasks[index].completed = true;
      displayTasks();
    }

    function editTask(index) {
      const newText = prompt("Edit task:", tasks[index].text);
      if (newText !== null) {
        tasks[index].text = newText.trim();
        displayTasks();
      }
    }
  
    function deleteTask(index) {
      tasks.splice(index, 1);
      displayTasks();
    }
  
  
    addTaskBtn.addEventListener('click', addTask);

    displayTasks();
  });
  