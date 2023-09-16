import db from '@/utils/db';
import TodoList from '@/components/TodoList'
type Props = {}

const getData = async () => {
  return await new Promise((res, error) =>
    setTimeout( async () => {
      // error('Server message: Ups... we could not load TODOs list ')
      res(await db.todo.findMany({}))
    },10 )
  )
}

const TodosPage = async (props: Props) => {
  const todos = await getData();
  return (
    <div>
      Todos
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage
