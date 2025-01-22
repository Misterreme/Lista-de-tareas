const list = document.getElementById("taskList");
const addButton = document.getElementById("addBtn");
const input = document.getElementById("taskInput");
const error = document.getElementById("error")

addButton.addEventListener("click", () => {
    if (list.children.length === 6) {
        error.textContent = "Maximo de tareas alcanzado"
        error.style.display = "block"
        return;
    } 

    if (input.value.trim() === "") {
        error.textContent = "No añadiste nada pendejo";
        error.style.display = "block"
        return;
    }

    error.style.display = "none"
    const liElement = document.createElement("li");
    liElement.textContent = input.value;
    
    const removeButton = document.createElement("button");
    removeButton.setAttribute("id", "deleteButton");
    removeButton.textContent = "X";
    removeButton.addEventListener("click", () => {
        list.lastElementChild.remove();
        error.style.display = "none";
    })

    liElement.append(removeButton);
    list.append(liElement);

    input.value = ""
})

