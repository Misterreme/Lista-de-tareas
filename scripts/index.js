const addButton = document.getElementById("add-button");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const errorMessage = document.getElementById("error-message");

const defaultLiElement = document.getElementById("firts-element");
const removeFirstElement = document.getElementById("remove-button");
removeFirstElement.addEventListener("click", () => {
    taskList.lastElementChild.remove();
    errorMessage.style.display = "none"
})

addButton.addEventListener("click", (event) => {
    // console.log(taskInput.value);

    if (taskInput.value.trim() === "") {
        console.error("ERRORRRR");
        errorMessage.style.display = "block";
        errorMessage.textContent = "This field must not be empty";
        return 
    } 

    if (taskList.children.length === 8) {
        errorMessage.textContent = "Maximum number of tasks reached";
        errorMessage.style.display = "block";
        return
    }

    const liElement = document.createElement("li");
    liElement.textContent = taskInput.value;
    errorMessage.style.display = "none";

    console.log(taskList.children.length);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X"
    removeBtn.setAttribute("class", "remove-button");
    removeBtn.addEventListener("click", () => {
        taskList.lastElementChild.remove();
        errorMessage.style.display = "none"
    })

    taskList.append(liElement);
    liElement.append(removeBtn);

    taskInput.value = ""
})