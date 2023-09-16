import React from 'react'
import Todo from './Todo';

const TodoList = ({todos}) => {
  return (
    <div>
      <h2>Todo list</h2>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
