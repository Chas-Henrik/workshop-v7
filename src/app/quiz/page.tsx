"use client"

import styles from './Quiz.module.css';
import React, { useContext, useState, useEffect } from "react";
import {QViewer, QViewerProps} from "@/components/QViewer"; // Adjust the import path as necessary
import { QList } from "@/components/QList"; // Adjust the import path as necessary
import { QResult } from "@/components/QResult"; // Adjust the import path as necessary
import { QuizType, QuizContext } from "@/context/QuizContext";

enum QuizStatus {
    Selecting,
    Running,
    Completed,
}

function Quiz(): React.JSX.Element {
    const context = useContext(QuizContext);
    if(!context) throw new Error("No defined Quiz context");
    const [quizStatus, setQuizStatus] = useState<QuizStatus>(QuizStatus.Selecting);
    const [currentQuiz, setCurrentQuiz] = useState<QuizType>(context?.quizzes[0]);
    const [score, setScore] = useState<number>(0);
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

    function submitTestHandler(quiz: QuizType, resultsArr: number[]) {
        // Implement the submit test handler logic here
        const score:number = quiz.questions?.reduce((acc, item, index) => {
            return acc + (item.alternatives[resultsArr[index]] === item.correctAnswer ? 1 : 0);
        }, 0);
        setScore(score);
        setQuizStatus(QuizStatus.Completed);
    };

    function restartTestHandler() {
        setQuizStatus(QuizStatus.Selecting);
    }

    return (
        <div className={styles.quizContainer}>
            {quizStatus===QuizStatus.Selecting && <QList quizzes={context.quizzes} selectQuizHandler={selectQuizHandler}/>}
            {quizStatus===QuizStatus.Running && <QViewer {...currentQuizMapped} submitTestHandler={submitTestHandler}/>}
            {quizStatus===QuizStatus.Completed && <QResult name={currentQuizMapped.name} score={score} maxScore={currentQuizMapped.questions?.length} restartTestHandler={restartTestHandler}/>}
        </div>
    )
}

export default Quiz