const taskList = document.getElementById("taskList");
const inputTask = document.getElementById("taskInput");
const addButton = document.getElementById("addTaskButton");
const errorMessage = document.getElementById("errorMessage");

addButton.addEventListener("click", () => {
    if (inputTask.value.trim() === "") {
        errorMessage.textContent = "No puedes dejar este campo vacio";
        errorMessage.style.display = "block";
        return; 
    }

    if (taskList.children.length === 6) {
        errorMessage.textContent = "¡Maximo de tareas alcanzado!";
        errorMessage.style.display = "block";
        return;
    }
    
    const liElement = document.createElement("li");
    liElement.textContent = inputTask.value;
    errorMessage.style.display = "none"
    
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.setAttribute("class", "removeBtn");
    removeBtn.addEventListener("click", () => {
        taskList.lastElementChild.remove();
        errorMessage.style.display = "none"
    })
    
    liElement.append(removeBtn);
    taskList.append(liElement);

    inputTask.value = ""
})