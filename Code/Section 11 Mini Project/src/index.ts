interface Todo {
    text: string;
    completed: boolean;
}
const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
// Note: TS can look at what you are selecting and automatically set a type.
const form = document.querySelector("form")!; // Takes a css selector
const list = document.querySelector("ul")!;

const todos: Todo[] = readTodos()
todos.forEach(createTodo)


function readTodos(): Todo[] {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON == null) return [];
    return JSON.parse(todosJSON)
}


function saveTodos(){

    localStorage.setItem("todos", JSON.stringify(todos));

}


function handleSubmit(e: SubmitEvent){
    // Telling TypeScript that the event is a Submit Event
    e.preventDefault();

    const newTodo: Todo = {
        text: input.value,
        completed: false
    }
    createTodo(newTodo)
    todos.push(newTodo)
    
    saveTodos();
    input.value = ""
}
// Object pass by reference
function createTodo(todo: Todo){
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function(){
        todo.completed = checkbox.checked;
        saveTodos();
    })

    newLI.append(todo.text)
    newLI.append(checkbox)
    list.appendChild(newLI)

}


form.addEventListener("submit", handleSubmit);