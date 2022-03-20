import logo from './logo.svg';
import './App.css';
import React, { createContext } from "react"
import HomePage from './HomePage';
import Question from './Question';
import Result from './Result';

export const myBasket = React.createContext();

function App() 
{
 
  const [currentComponent, setCurrentComponent] = React.useState("HomePage")
  // currentComponent = "Question"
  const [myScore, setScore] = React.useState(0)

  return (
    <div>

    {/* object format */}
      <myBasket.Provider value={{set : setCurrentComponent, score :myScore, setScore :setScore}}>
        {currentComponent == "HomePage" && <HomePage/>}
        {currentComponent == "Question" && <Question/>}
        {currentComponent == "Result" && <Result/>}
      </myBasket.Provider>
      
    
   
    </div>
     );
}

export default App;
