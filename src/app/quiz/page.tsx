"use client"

import styles from './Nav.module.css';
import React, { useContext, useEffect } from "react";
import { QuizQuestionType, QuizType, QuizContextType, QuizContext } from "@/context/QuizContext";


function Quiz(): React.JSX.Element {
    const context = useContext(QuizContext);
    if(!context) throw new Error("No defined Quiz context");

    const quiz = context.quizzes[0];

    const elements = quiz.questions.map((question) => {
        return [
            <h2 key={`question-${question.id}`}>{question.question}</h2>,
            <ul key={`alternatives-${question.id}`}>{question.alternatives.map((item, index) => <li key={`${question.id}${index}`}>{item}</li>)}</ul>,
            <p key={`answer-${question.id}`}>{question.correctAnswer}</p>
        ];
    });

    useEffect(() => {
        console.log("quiz useEffect");
    }, []);

    return (
        <div>
            <h1>Quizzes</h1>
            {elements}
        </div>
    )
}

export default Quiz