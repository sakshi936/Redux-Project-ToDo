import { createSlice, nanoid } from "@reduxjs/toolkit"; // nanoid-> generates unique id's

const initialState ={
    todos: [{id:1, text: "Hello world"}]
}

export const todoSlice= createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action)=>{   // state refers to current state(initial state at start) // action passed .parameter(here to do task )
            const todo={
                id: nanoid(),
                text: action.payload
            }

            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos= state.todos.filter((todo)=> todo.id!== action.payload)
        },
    
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer