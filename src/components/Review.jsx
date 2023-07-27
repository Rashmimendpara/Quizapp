// import QuizResult from "./QuizResult";

const Review = ({quizData}) => {
    const[oldpage,setOldpage] = (false);

    console.log("this my review page",quizData);

    // const goBack = () => {
    //     setOldpage(true);
    // }

    return(<>

    <div className="review-page">
        {
            quizData.map((quiz,i) => (<>
            <ul key={i}>
                    <h4>{quiz.question}</h4>
                    {
                        quiz.answers.map((item,j) => (
                            <li key={j}>{item}</li>
                        ))
                    }
            </ul>
            </>))
        }
    </div>
    {/* <button onClick={goBack}>Back</button>
    {
        setOldpage && (<QuizResult/>)
    } */}
    </>);

}

export default Review;