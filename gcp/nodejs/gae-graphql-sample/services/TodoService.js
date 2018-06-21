let database = require('../lib/database')

class TodoService {
    constructor() {

    }
    static all() {
        return database
    }

    static findById(id) {
        return database.find(data => data.id === id)
    }

    static create(todo) {
        database.push(todo)
        return todo
    }

    static update(todo) {
        database = database.filter(data => data.id !== todo.id)
        database.push(todo)
        return todo
    }

    static delete(id) {
        database = database.filter(data => data.id !== id) 
        return id
    }
}

module.exports = TodoService