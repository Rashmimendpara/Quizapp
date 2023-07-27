// import React from 'react';
import { useState } from "react";
import Review from "./Review";

const quizResult = ({score,quizData,tryAgain}) => {

  const [showReviews, setShowReviews] = useState(false);

const showReviewPage = () => { 
  setShowReviews(true)
}
 
  return (
    <>
    <div className='result-page'>
      {/* Div for score */}
      <div className="div-labelScores"> 
        <label id="lbl-score">Score:{score}</label>
        <label id="lbl-final-score">Total Score:{quizData?.length}</label>
      </div>
      {/* div for Buttons */}
      <div className="div-bottom">
      <button id="tryagain-button" onClick={tryAgain}>Try Again</button>
      <button id="review-button" onClick={showReviewPage}>Review</button>
    {
      showReviews && (<Review quizData={quizData}/>) 
    }
      </div>    
   </div>
    </>
  )
}
export default quizResult;
