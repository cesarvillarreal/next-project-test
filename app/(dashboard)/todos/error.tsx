'use client'
// const GlobalError = ({error}) => {
  // const { message } = error;
const GlobalError = () => {
  return (
    // <div>{message || 'Ops... we have an error loading TODOs list' }</div>
    <div>{'Ops... we have an error loading TODOs list' }</div>
  )
}

export default GlobalError
