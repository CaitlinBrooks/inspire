

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/caitlin/todos/',
	timeout: 5000
});

function logError(e) {
	console.log(e)
}


let todoList = []

export default class TodoService {

	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => { // <-- WHY IS THIS IMPORTANT????
				console.log(res.data.data)
				todoList = (res.data.data)
				draw(res.data.data)
			})
			.catch(logError)
	}

	addTodo(todo, draw) {
		// WHAT IS THIS FOR???
		todoApi.post('', todo)
			.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				todoList.push(res)
				this.getTodos(draw)
			})
			.catch(logError)
	}

	toggleTodoStatus(todoId, draw) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList
		let todo = todoList.find(todoElem => todoElem._id); ///MODIFY THIS LINE 
		todo.completed = !todo.completed // can be either true or false, it's a switch to toggle.
		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
				draw(res)
			})
			.catch(logError)
	}

	deleteTodo(todoId, draw) {
		todoApi.delete(todoId)
			.then(res => { //ask about this not being referenced
				this.getTodos(draw)
			})
	}
}

// deleteTodo(todoId, draw) {
// 	// This one is mine to write -- delete method
// 	let todo = todoList.find(todoElem => todoElem._id == todoElem);
// 	todoApi.delete(todoId)
// 	this.getTodos(draw)

// }