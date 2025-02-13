"use client"

import styles from './Nav.module.css';
import React, { useContext, useEffect } from "react";
import { QuizQuestionContextType, QuizContextType, QuizContext, QuizProvider } from "@/context/QuizContext";


function Quiz(): React.JSX.Element {
    const context = useContext(QuizContext);
    if(!context) throw new Error("No defined Quiz context");

    const quiz = context?.quizzes[0];
    const liElements = quiz?.alternatives.map((item, index) => <li key={`${quiz.id}${index}`}>{item}</li>);

    useEffect(() => {
        console.log("quiz useEffect");
    }, []);

    return (
        <div>
            <h1>Quiz</h1>
            <h2>{quiz && quiz.question}</h2>
            <ul>
                {quiz && liElements}
            </ul>
            <p>{quiz && quiz.correctAnswer}</p>
        </div>
    )
}

export default Quiz