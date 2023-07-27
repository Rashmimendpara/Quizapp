import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';
import Question from "./components/Question"; 
// import React from 'react';

function App() {
  const [quizData,setQuizData] = useState([]);

  const url = "https://wd40-trivia.onrender.com/api/questions";

  const fetchData = () => {
    axios
    .get(url)
    .then((res) => {
        setQuizData(res.data);
        console.log("my response is...json..",res.data);
    })
    .catch((err) => ("error",err))
}

  
    //useEffect
    useEffect (() => {
      fetchData();
      console.log("my response is...use effect",quizData);
  },[]);

  return (
    < >
    <Question quizData={quizData} />
    </>
  )
}

export default App
