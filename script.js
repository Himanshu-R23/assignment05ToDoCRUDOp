const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){
        alert("You must enter a Task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();

}

listContainer.addEventListener('click', function(done){
    if(done.target.tagName === "LI"){
        done.target.classList.toggle("checked");
        saveData();
    }

    else if(done.target.tagName === "SPAN"){
        done.target.parentElement.remove();
        saveData();
    }
}, false )

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showList();