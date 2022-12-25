const tasksToDo = document.getElementsByClassName("tasksToDo")[0];
const input = document.getElementsByClassName("user-input")[0];
input.addEventListener("keydown", function (event){
    if(event.key === "Enter") {
        addItems();
        size_check();
    }
});
function submit(){
    size_check();
    addItems();
}
function size_check() {
    const textBoxStringSize = document.getElementsByTagName("html")[0].offsetWidth / 10;

    for(let i=1;(input.value.length > textBoxStringSize * i);i++){
        input.value=input.value.slice(0,textBoxStringSize*i-1) + " \n" + input.value.slice(textBoxStringSize*i-1);
    }
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