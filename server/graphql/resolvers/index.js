const { findOneAndUpdate } = require('../../models/todo');
const Todo = require('../../models/todo');

module.exports = {
    todos : async () => {
        try {

            const TodoFetched = await Todo.find();
            return TodoFetched.map(todo => {
                return {
                    ...todo._doc,
                    _id:todo.id,
                    createdAt: new Date(todo._doc.createdAt).toISOString(),
                }
            })
        } catch (error) {
            throw error
        }
    },

    createTodo: async args => {
        try {
            const {title,body} = args.todo
            const todo = new Todo({
                title,
                body
            })
            const newTodo = await todo.save()
            return {
                ...newTodo._doc,_id:newTodo.id
            }
        } catch (error) {
            throw error
        }
    },

    updateTodo: async ({id,title,body}) => {
        
        try {
            const newTodo = await Todo.findOneAndUpdate({_id:id},{
                title,
                body
            },{new:true})
            return {
                ...newTodo._doc
            }
        } catch (error) {
            throw error
        }
    },

    removeTodo: async ({id}) => {
        try {
            const newTodo = await Todo.findOneAndDelete({_id:id})
            return {
                ...newTodo._doc
            }
        } catch (error) {
            throw error
        }
    }



}