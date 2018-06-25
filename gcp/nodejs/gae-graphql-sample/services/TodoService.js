const { list, find, add, update, remove } = require('../lib/firebase')

class TodoService {
    constructor() {

    }
    static all() {
        return list('todos')
    }

    static create(todo) {
        return add('todos', todo)
    }

    static async update(todo) {
        const curVal = await find('todos', todo.id)
        let nextVal = { ...todo.data }
        const updateKeys = Object.keys(curVal).filter(key => curVal[key] !== nextVal[key])
        const updateVal = updateKeys.reduce((pre, cur)=> { 
            pre[cur] = nextVal[cur]
            return pre 
        }, {})
        return update('todos', todo.id, updateVal)
    }

    static delete(id) {
        return remove('todos', id)
    }
}

module.exports = TodoService