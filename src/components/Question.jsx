import {useState } from "react";
import QuizResult  from "./QuizResult"; 

const Question = ({ quizData }) => {
    
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const [score,setScore] = useState(0);
    const [selectedOption,setSelectedOption] = useState(0);
    const [showResult,setShowResult] = useState(false);
    // const [review,setReview] = useState(false);
    
    // Change Question

    const changeQuestion = () => {
        updateScore();
        if(currentQuestion < quizData.length-1) {
            setCurrentQuestion(currentQuestion+1);
            setSelectedOption(0);
        } else {
            // alert("You are on last question....");
            setShowResult(true);
        }
    }

    const updateScore = () => {
        //match the selected option with 4 options
        //find correct answer index from answer
        const ans = quizData[currentQuestion].correctAnswer;
        const allans = quizData[currentQuestion].answers
        console.log("find correct answer index from answer",allans.indexOf(ans)+1);
        if (selectedOption === allans.indexOf(ans)+1){
            setScore(score + 1);
        }  
    }

    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setSelectedOption(0);
        setScore(0);
    }
 
    return (<>
    <div>
    <label className="title-Quiz">Quiz App</label>
    {
        quizData.length &&( <div className="container">
            {
                showResult? (<QuizResult score={score} quizData={quizData} tryAgain={resetAll} /> ): (<>
                    
                    <div className="question">
                    <span id="Question-number">{currentQuestion+1}.</span>
                    <span id="Question-txt">{quizData[currentQuestion].question}</span>
                    </div>

                    <div className="option-container">
                        {  quizData[currentQuestion].answers.map((answer,i) => {
                            return (<div key= {answer}>
                    <button 
                    // className="option-btn"
                    className={`option-btn ${selectedOption == i+1 ? "checked" : null }`}
                    onClick={() => setSelectedOption(i+1)} key={i}>{answer}</button>
                    </div> 
                    )
                 } ) }
                </div>
                <input type = "button" value="Next" id="next-button" onClick={changeQuestion}/>
                </>) 
            }   
             </div>)
    }
    </div>
    </>
    ); 
}
export default Question;
