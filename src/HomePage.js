import React from 'react'
import {myBasket} from "./App.js"
function HomePage(){
    //Any component can collect the information present in the basket using useContext()
    const {set} = React.useContext(myBasket)
    // set = setCurrentComponent
    function goToQuestionComponent()
    {
        set("Question")
    }

  return (
   <div>
       <button onClick={goToQuestionComponent}>Start Quiz</button>
   </div>
  )
}

export default HomePage