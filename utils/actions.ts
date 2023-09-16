'use server'
import { revalidatePath } from 'next/cache';
import db from './db';

export const createTodo = async (formData) => {
  const todo = await db.todo.create({
    data: {
      content: formData.get('content')
    }
  })
  // es para hacer refresh a todos
  revalidatePath('/todos')
}

export const toggleCompleted = async (id, completed) => {
  await db.todo.update({
    where: { id },
    data: {
      completed
    }
  })
  revalidatePath('/todos')
}
