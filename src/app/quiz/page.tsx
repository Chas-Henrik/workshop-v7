"use client"

import styles from './Quiz.module.css';
import React, { useContext, useState, useEffect } from "react";
import {QViewer, QViewerProps} from "@/components/QViewer"; // Adjust the import path as necessary
import { QList } from "@/components/QList"; // Adjust the import path as necessary
import { QuizQuestionType, QuizType, QuizContext } from "@/context/QuizContext";

enum QuizStatus {
    Selecting,
    Running,
    Completed,
}

function Quiz(): React.JSX.Element {
    const context = useContext(QuizContext);
    if(!context) throw new Error("No defined Quiz context");
    const [quizStatus, setQuizStatus] = useState(QuizStatus.Selecting);
    const [currentQuiz, setCurrentQuiz] = useState(context?.quizzes[0]);
    const currentQuizMapped: QViewerProps = currentQuiz ?{
        ...currentQuiz,
        questions: currentQuiz.questions.map(q => ({
            ...q,
            selectedAnswer: -1,
            selectRadioButtonHandler: () => {}
        })),
        submitTestHandler: submitTestHandler
    }: {id: 0, name: "", questions: [], submitTestHandler: submitTestHandler};

    useEffect(() => {
        console.log("quiz useEffect");
    }, []);

    function selectQuizHandler(quiz: QuizType) {
        console.log("selectQuizHandler", quiz);
        setCurrentQuiz(quiz);
        setQuizStatus(QuizStatus.Running);
    }

    function submitTestHandler(questions: QuizQuestionType[], resultsArr: number[]) {
        // Implement the submit test handler logic here
        console.log("Submit test handler called", questions, resultsArr);
        setQuizStatus(QuizStatus.Completed);
    };

    return (
        <div className={styles.quizContainer}>
            {quizStatus===QuizStatus.Selecting && <QList quizzes={context.quizzes} selectQuizHandler={selectQuizHandler}/>}
            {quizStatus===QuizStatus.Running && <QViewer {...currentQuizMapped} submitTestHandler={submitTestHandler}/>}
        </div>
    )
}

export default Quiz