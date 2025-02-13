"use client"

import styles from './Quiz.module.css';
import React, { useContext, useEffect } from "react";
import {QViewer, QViewerProps} from "@/components/QViewer"; // Adjust the import path as necessary
import { QuizQuestionType, QuizType, QuizContextType, QuizContext } from "@/context/QuizContext";

export type QViewerProps = {
    id: number;
    name: string;
    questions: QQViewerProps[];
}

function Quiz(): React.JSX.Element {
    const context = useContext(QuizContext);
    if(!context) throw new Error("No defined Quiz context");
    const currentQuiz = context.quizzes[0];

    // const qq = context?.quizzes[0]?.questions[0];

    // const allQQ = context?.quizzes[0]?.questions.map((question) => {
    //     return <QQViewer key={question.id} {...question}/>;
    // });

    // const elements = quiz.questions.map((question) => {
    //     return [
    //         <h2 key={`question-${question.id}`}>{question.question}</h2>,
    //         <ul key={`alternatives-${question.id}`}>{question.alternatives.map((item, index) => <li key={`${question.id}${index}`}>{item}</li>)}</ul>,
    //         <p key={`answer-${question.id}`}>{question.correctAnswer}</p>
    //     ];
    // });

    useEffect(() => {
        console.log("quiz useEffect");
    }, []);

    return (
        <div className={styles.quizContainer}>
            {/* <h1>Quizzes</h1> */}
            <QViewer {...currentQuiz}/>
        </div>
    )
}

export default Quiz