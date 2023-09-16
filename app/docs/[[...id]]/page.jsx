import React from 'react'

import styles from './style.module.css'

const DocsIdPage = ({ params, searchParams } ) => {
  console.log(params)
  return (
    <div>
      Docs ID page
      <div> id: {params.id} </div>
      <div className={styles.title}> title: {params.title} </div>
      <div>SEARCH PARAMS ID:  { searchParams.id }</div>
    </div>
  )
}

export default DocsIdPage
