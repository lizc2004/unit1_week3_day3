const form = document.getElementById("task-form")
const taskInput = document.getElementById("task-input")
const taskList = document.getElementById("task-list")

const toggleCompleted = function (event) {
  event.target.classList.toggle("completed")
}

const deleteTask = function (event) {
  const button = event.target
  const listItem = button.parentElement
  listItem.remove()
}

const addTask = function (event) {
  event.preventDefault()

  const newTaskText = taskInput.value.trim()

  if (newTaskText === "") {
    alert("Scrivi una task prima di aggiungerla")
    return
  }

  const newLi = document.createElement("li")
  newLi.classList.add("task-item")

  const newSpan = document.createElement("span")
  newSpan.classList.add("task-text")
  newSpan.innerText = newTaskText
  newSpan.addEventListener("click", toggleCompleted)

  const deleteButton = document.createElement("button")
  deleteButton.classList.add("delete-btn")
  deleteButton.type = "button"
  deleteButton.innerText = "Elimina"
  deleteButton.addEventListener("click", deleteTask)

  newLi.appendChild(newSpan)
  newLi.appendChild(deleteButton)

  taskList.appendChild(newLi)

  form.reset()
}

form.addEventListener("submit", addTask)

const oldTasks = document.querySelectorAll(".task-text")
for (let i = 0; i < oldTasks.length; i++) {
  oldTasks[i].addEventListener("click", toggleCompleted)
}

const oldDeleteButtons = document.querySelectorAll(".delete-btn")
for (let i = 0; i < oldDeleteButtons.length; i++) {
  oldDeleteButtons[i].addEventListener("click", deleteTask)
}
