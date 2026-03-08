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

