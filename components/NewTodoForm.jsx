// 'use client'
// import React, { useState } from 'react'
import { createTodo } from "@/utils/actions"
const NewTodoForm = () => {
  // const [state, setState] = useState('');

  return (
    <>
      <form action={createTodo}>
        <label>
          <input name="content" type="text" className="border border-black/25" />
          <button tyep="submit" className="border"> Add Todo</button>
        </label>
      </form>
    </>
  )
}

export default NewTodoForm
