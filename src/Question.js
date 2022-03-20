import React from 'react'
import { myBasket } from './App'
import { questions } from './myquestions'

function Question() {

  const {set, score, setScore} = React.useContext(myBasket)

  const [currentQuestion, setCurrentQuestion] = React.useState(0)

  const [myOption, setOption] = React.useState("")
  
  

  function validate()
  {
    //verify if its correct or not
    if(myOption == questions[currentQuestion].answer)
    {
      setScore(score + 1)
    }
    //go to the next question
    setCurrentQuestion(currentQuestion + 1)
  }

  function goToResult()
  {
    setScore(score + 1)
    set("Result")
  }
  return (
    <div>
      <h1>{questions[currentQuestion].title}</h1>
      <div>
       A.<button onClick={function()
       {
         setOption("A")
       }}>{questions[currentQuestion].optionA}</button><br/><br/>

        B.<button onClick={function()
       {
         setOption("B")
       }}>{questions[currentQuestion].optionB}</button><br/><br/>

        C.<button onClick={function()
       {
         setOption("C")
       }}>{questions[currentQuestion].optionC}</button><br/><br/>

        D.<button onClick={function()
       {
         setOption("D")
       }}>{questions[currentQuestion].optionD}</button><br/><br/>

      </div>
       {
         currentQuestion == questions.length - 1 ?
         <button onClick={goToResult}>Finish</button> : <button onClick={validate}>Next</button>
       }
      {score}
    </div>
  )
}

// Whenever we click on next button
// 2 things
// 1)Collect the option and verify if the answer is correct or not
// 2)Go to the next question

export default Question