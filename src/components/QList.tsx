'use client'

import styles from './QList.module.css';
import React from "react";
import { QuizType } from "@/context/QuizContext";

export type QListProps = {
    quizzes: QuizType[];
    selectQuizHandler: (quiz: QuizType) => void;
}

export function QList(props:QListProps): React.JSX.Element {
    const quizzes: QuizType[] = props?.quizzes;
    const quizList = quizzes?.map((quiz) => {
        return <li className={styles.listItem} key={quiz.id} onClick={() => props.selectQuizHandler(quiz)}>{quiz.name}</li>;
    });

    return (
        <article className={styles.QList}>
            <h2 className={styles.header}>Select Quiz</h2>
            <ul className={styles.quizList}>
                {quizList}
            </ul>
        </article>
    )
}