'use client'

import { useTransition } from 'react'
import { toggleCompleted } from '@/utils/actions'
const Todo = ({todo}) => {
  const [isPending, startTransition] = useTransition();

  return (
    <div
      onClick={() => startTransition(() => toggleCompleted(todo.id, !todo.completed))}
      className='border border-black/25'
    >
      <p className={`${todo.completed ? 'line-through text-gray-900' : ''}`}>{todo.content} </p>
    </div>
  )
}

export default Todo
