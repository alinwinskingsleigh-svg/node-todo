// 명령어 처리
const command = process.argv[2]; 
const detail = process.argv[3];  

if (command === 'add') {
    addTodo(detail); 
} else if (command === 'list') {
    listTodos();
} else if (command === 'done') {
    doneTodo(detail);
}


const fs = require('fs');

//loadTodos 함수
function loadTodos() {
    try{
        const data = fs.readFileSync('todos.json', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

//saveTodos 함수
function saveTodos(todos) {
    fs.writeFileSync('todos.json', JSON.stringify(todos, null, 2));
}

//listTodos 함수
function listTodos(){
    const todos = loadTodos(); 
    if (todos.length === 0) {
        console.log("Todo가 없습니다!😢");
    }
    todos.sort((a, b) => a.id - b.id);
    todos.forEach(todo => {
        if (todo.done === true) {
            console.log(`[ ] [${todo.id}][${todo.title}]`);
        } else {
            console.log(`[x] [${todo.id}][${todo.title}]`);
        }
    });
}

//addTodo 함수
function addTodo(Title){
    const todos = loadTodos();
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    const newTodo = {
        id: newId,
        title: Title,
        done: false
    };
    todos.push(newTodo);
    saveTodos(todos);

    console.log(`Todo가 추가되었습니다!😆: [${Title}]`);
}

