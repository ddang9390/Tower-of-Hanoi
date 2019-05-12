var blocks = document.getElementsByClassName("block");
var stack1 = document.getElementById("stack1");
var stack2 = document.getElementById("stack2");
var goal = document.getElementById("stack3");
var gameover = false;
var draggeddisc;

function allowDrop(ev) {
    var stack = ev.currentTarget;

    var totalBlocks = stack.getElementsByClassName("block");
    if(totalBlocks.length == 0 || totalBlocks[0].id > draggeddisc){
        ev.preventDefault();
        return;
    }
    
}

function drag(ev) {
    if(ev.target.parentElement.children[0].id == ev.target.id){
        ev.dataTransfer.setData("text", ev.target.id);
        draggeddisc = ev.target.id;
    }
    else{
        ev.preventDefault();
    }
    
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    var stack = ev.target;
    var firstChild = stack.children[0];

    stack.insertBefore(document.getElementById(data), firstChild);
    //stack.appendChild(document.getElementById(data));
}

function checkGoal(){
    if(goal.children.length == 3){
        document.getElementById("win").style.display = "block";
    }
}

function resetGame(){
    location.reload();
}