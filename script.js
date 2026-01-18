const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const info = document.getElementById("info");

let totalTask = 0;
let doneTask = 0;

function addTask() {
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Selesai";
    doneBtn.onclick = function () {
        span.classList.toggle("done");
        if (span.classList.contains("done")) {
            doneTask++;
        } else {
            doneTask--;
        }
        updateInfo();
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.onclick = function () {
        if (span.classList.contains("done")) {
            doneTask--;
        }
        taskList.removeChild(li);
        totalTask--;
        updateInfo();
    };

    li.appendChild(span);
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    totalTask++;
    updateInfo();
    taskInput.value = "";
}

function updateInfo() {
    info.textContent = `Total tugas: ${totalTask} | Selesai: ${doneTask}`;
}
