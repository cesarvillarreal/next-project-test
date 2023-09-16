import React from 'react'
import NewTodoForm from '@/components/NewTodoForm';
type Props = {
  children: any
}

const DashboardLayout = ({children}: Props) => {
  return (
    <div>
      <h1>
        DashboardLayout
      </h1>
      <NewTodoForm />
      {children}
    </div>

  )
}

export default DashboardLayout
