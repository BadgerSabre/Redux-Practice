import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, clearTodo } from './Features/todoSlice'

function Todo() {
    const items = useSelector((state) => state.todos.items)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const displayTodo = items.map((item, i) => {
        return <li key={i}>{item}</li>
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={(e) => setInput(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
            {displayTodo}
            <button onClick={() => dispatch(clearTodo())}>Clear list</button>
        </>
    )
}

export default Todo