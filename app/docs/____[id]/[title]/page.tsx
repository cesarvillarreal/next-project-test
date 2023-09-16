import React from 'react'
type Props = {
  params: any
}

const DocsIdPage = ({ params } : Props) => {
  return (
    <div>
      Docs ID page
      <div> id: {params.id} </div>
      <div> title: {params.title} </div>
    </div>
  )
}

export default DocsIdPage
