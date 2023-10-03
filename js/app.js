const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTarefa() {
    if (inputBox.value === '') {
        alert("A tarefa esta com nome em branco!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    salvarDados();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        salvarDados();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        salvarDados();
    }
}, false);

inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        addTarefa();
    }
})

function salvarDados() {
    localStorage.setItem("data", listContainer.innerHTML)
}
function mostrarDados() {
    listContainer.innerHTML = localStorage.getItem("data");
}
mostrarDados();
