var todo=["Hello"];
var input=prompt("What would you like to do?");
/*if(input==="list"){
	console.log(todo);
}
else if (input==="new") {
	var newtodo=prompt("Enter new todo:");
	todo.push(newtodo);
}*/
while(input!=="quit"){
	if(input==="list"){
	listTodo();
}
else if (input==="new") {
	addTodo();
}
else if(input==="delete"){
	deleteTodo();
}
input=prompt("What would you like to do?");
}
	console.log("Ok.You quit the app!");
function listTodo(){
	console.log("*******")
	todo.forEach(function(todos,i){
		console.log(i+": "+todos);
	});
	console.log("*******")
}
function addTodo() {
	var newtodo=prompt("Enter new todo:");
	todo.push(newtodo);
	console.log("Added");
}
function deleteTodo(){
	var index=prompt("Enter index to delete?");
	todo.splice(index,1);
	console.log("Deleted Todo");
}
