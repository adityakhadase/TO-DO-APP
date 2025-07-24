const input =document.getElementById("input-box");
const ul =document.querySelector("ul");
function addtask(){
    if (input.value === '') {
        alert("You must write something!");
        return; // Stop the function here
    }
    let li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    li.classList.add("uncheck");
    var span =document.createElement("img")
    span.src ="./close.png"
    span.type ="button";
    li.appendChild(span)
    input.value ="";
    span.onclick=function(){
li.remove();
};
   
};


