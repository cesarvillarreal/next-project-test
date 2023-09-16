import { NextResponse } from "next/server";
import db from '@/utils/db';

export const GET = async (request: Request) => {
  const todos = await db.todo.findMany({})

  return NextResponse.json({
    data: todos
  })
}

export const POST = async (request: Request) => {
  console.log(request)
  const data = await request.json()

  const todo = await db.todo.create({
    data
  })

  return NextResponse.json({
    todo
  })
}
