import TodoService from "./todo-service.js";


let todoService = new TodoService

// Use this getTodos function as your callback for all other edits
function getTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(draw)
}

function draw(todos) {
	//WHAT IS MY PURPOSE?
	//BUILD YOUR TODO TEMPLATE HERE
	let template = ''
	todos.forEach(todo => {
		let completed = todo.completed
		if (completed == false) {
			template += `
	<input type="checkbox" id="${todo.description}"onchange="app.controllers.todoController.toggleTodoStatus('${todo._id}')"/>
	<label for ="${todo.description}">${todo.description}</label><button onclick="app.controllers.todocontroller.removeTodo('${todo._id}')">Remove</button>
	`
		} else
			if (completed) {
				template += `
				<input type="checkbox" checked id="${todo.description}"onchange="app.controllers.todoController.toggletodoStatus('${todo._id}')" checked/>
				<label for ="${todo.description}">${todo.description}</label><button onclick="app.controllers.todoController.removeTodo('${todo._id}')">Remove</button>
				`
			}

	})
	template += `
<form onsubmit="app.controllers.todoController.addTodoFromForm(event)">
<input type="text" name="newtodo" placeholder="Get Milk">
<button type="submit">Add Item</button>
</form>
`
	document.getElementById('todo').innerHTML = template
	//DONT FORGET TO LOOP

}


export default class TodoController {
	constructor() {
		getTodos()// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
	}
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again


	addTodoFromForm(e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		let form = e.target
		let todo = {
			description: form.newtodo.value

			// DONT FORGET TO BUILD YOUR TODO OBJECT
		}

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	toggleTodoStatus(todoId) {
		todoService.toggleTodoStatus(todoId, getTodos)
		// asks the service to edit the todo status
		// YEP THATS IT FOR ME
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		todoService.deleteTodo(todoId, getTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}

}
