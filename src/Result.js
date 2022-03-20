import React from 'react'
import { myBasket } from './App'

function Result() {
  const {score} = React.useContext(myBasket)
  return (
    <div>
        Your Score is: {score}
    </div>
  )
}

export default Result