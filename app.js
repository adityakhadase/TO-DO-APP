const input = document.getElementById("input-box");
const ul = document.querySelector("ul");

function addtask() {
    if (input.value === '') {
        alert("You must write something!");
        return;
    }
    let li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    li.classList.add("uncheck");

    let span = document.createElement("img");
    span.src = "./close.png";
    span.type = "button";
    li.appendChild(span);

    span.onclick = function () {
        li.remove();
        savedata();
    };

    input.value = "";
    savedata();
}

function savedata() {
    localStorage.setItem("newtododata", ul.innerHTML);
}

function attachDeleteHandlers() {
    document.querySelectorAll("ul li img").forEach(span => {
        span.onclick = function () {
            span.parentElement.remove();
            savedata();
        };
    });
}

function showdata() {
    ul.innerHTML = localStorage.getItem("newtododata");
    attachDeleteHandlers(); // Important: reattach the delete logic!
}

showdata();