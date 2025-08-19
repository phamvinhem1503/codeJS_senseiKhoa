function addTask(){
const inputData = document.getElementById("inputData");
const taskText = inputData.value;
if (taskText ==="") {
    alert("vui lòng nhập nội dung công việc");
    return;
}
const taskList = document.getElementById("taskList");

const listItem = document.createElement("li");
listItem.className = "li-css";

const taskContent = document.createElement("div");

const checkBox = document.createElement("input");
checkBox.type = "checkbox";

const textSpan = document.createElement("span");
textSpan.textContent = taskText;

taskContent.appendChild(checkBox);
taskContent.appendChild(textSpan);

const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
deleteButton.className = "btn btn-danger";

listItem.appendChild(taskContent);
listItem.appendChild(deleteButton);
taskList.appendChild(listItem);

}