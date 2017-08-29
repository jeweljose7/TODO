
var counter=0;

function drag_handler(ev) {
	console.log("Drag");
}
function dragstart_handler(ev) {
	console.log("dragStart");
	ev.dataTransfer.setData("text", ev.target.id);
}
function drop_handler(ev,form) {
	console.log("Drop");
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	form.appendChild(document.getElementById(data));
}
function dragover_handler(ev) {
 console.log("dragOver");
 ev.preventDefault();
}
function add() {
    var task = document.getElementById('task').value;
    console.log(task);
    var newcard = document.createElement("li");
    var textfield = document.createElement("p");
    var removebutton = document.createElement("button");
    removebutton.setAttribute("class","rmbtn");
    removebutton.innerHTML="X";
    removebutton.addEventListener("click",remove);
    newcard.appendChild(textfield);
    newcard.appendChild(removebutton);
    textfield.innerHTML= task;
    newcard.setAttribute("id",counter);
    counter +=1;
    newcard.setAttribute("class","card-panel");
    newcard.setAttribute("draggable","true");
    newcard.setAttribute("ondrag","drag_handler(event);");
    newcard.setAttribute("ondragstart","dragstart_handler(event);");
    var todos=document.getElementById('todos');
	todos.appendChild(newcard);
	inputbox=document.getElementById('task');
	inputbox.value="";

}
function remove() {
 	var listtoremove = this.parentNode;
 	listtoremove.remove();
}
document.getElementById('add').addEventListener('click', add);
