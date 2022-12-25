const tasksToDo = document.getElementsByClassName("tasksToDo")[0];
const input = document.getElementsByClassName("user-input")[0];
input.addEventListener("keydown", function (event){
    if(event.key === "Enter") {
        addItems();
    }
});
function submit(){
    addItems();
}
function addItems(){
    const toDO = document.createElement("div");
    const holder = document.createElement("div");
    const trash = document.createElement("i");
    const check = document.createElement("i");
    const userText = document.createElement("p");
    toDO.className ="toDo";
    userText.innerText = input.value;
    holder.appendChild(userText);
    check.className="bi bi-check-circle";
    check.style.color = "lightgray";
    check.addEventListener("click", function () {
        check.style.color = "limegreen";
    })
    holder.appendChild(check);
    trash.className="bi bi-trash-fill";
    trash.style.color = "lightgray";
    trash.addEventListener("click", function () {
        toDO.remove();
    })
    holder.appendChild(trash);
    toDO.appendChild(holder);
    tasksToDo.appendChild(toDO);
    input.value = ""
}