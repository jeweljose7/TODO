
var counter=0;
var status;
var currentcard;

function add() {
    var task = document.getElementById('task').value;
    console.log(task);
    if(task=="") {
    	window.alert("Enter Any Task");
	}
	else {
		var newcard = createnewcard(task);
	    var todos=document.getElementById('todos');
		todos.appendChild(newcard);
		inputbox=document.getElementById('task');
		inputbox.value="";
	}

}
function createnewcard(task) {
		var newcard = document.createElement("li");
	    var textfield = document.createElement("p");
	    var removebutton = document.createElement("button");
	    var statusfield = document.createElement("p");
	    removebutton.setAttribute("class","rmbtn");
	    statusfield.setAttribute("class","status ");
	    status="Todo";
	    statusfield.innerHTML="status:"+status;
	    removebutton.innerHTML="X";
	    removebutton.addEventListener("click",remove);
	    newcard.appendChild(textfield);
	    newcard.appendChild(removebutton);
	    newcard.appendChild(statusfield);
	    textfield.setAttribute("id","textfield");
	    textfield.addEventListener('dblclick', edit);
	    textfield.innerHTML= task;
	    newcard.setAttribute("id",counter);
	    counter +=1;
	    newcard.setAttribute("class","card-panel");
	    newcard.setAttribute("draggable","true");
	    newcard.setAttribute("ondrag","drag_handler(event);");
	    newcard.setAttribute("ondragstart","dragstart_handler(event);");
	    return newcard;
}
function remove() {
 	var listtoremove = this.parentNode;
 	listtoremove.remove();
}
function edit() {
	console.log(this);
}

function drag_handler(ev) {
	console.log("Drag");
	console.log(ev.target.id);
	currentcard = ev.target.id;
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
	state = ev.target.id;
	var card = document.getElementById(currentcard)
	switch(state) {
		case "todos" : console.log("0"); status="Todo"; break;
		case "progreses" : console.log("1"); status="Progress"; break;
		case "reviews" : console.log("2"); status="Reviews"; break;
		case "dones" : console.log("3"); status="Done" ; break;
		
	}
	card.childNodes[2].innerHTML="status:"+status;
	console.log(status);

}
function dragover_handler(ev) {
 console.log("dragOver");
 ev.preventDefault();
}

document.getElementById('add').addEventListener('click', add);

