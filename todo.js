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
