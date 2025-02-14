'use client'

import styles from './QResult.module.css';
import React from "react";
import { QuizQuestionType } from '@/context/QuizContext'; // Adjust the import path as necessary

export type QResultProps = {
    id: number;
    name: string;
    questions: QuizQuestionType[];
    resultsArr: number[];
    restartTestHandler: () => void;
}

export function QResult(props: QResultProps): React.JSX.Element {
    const maxScore: number = props.questions?.length;
    const score:number = props.questions?.reduce((acc, item, index) => {
        return acc + (item.alternatives[props.resultsArr[index]] === item.correctAnswer ? 1 : 0);
    }, 0);

    return (
        <article className={styles.QResult}>
            <h2 className={styles.header}>Results: {props.name} Quiz</h2>
            <p className={styles.score}>{score}/{maxScore}</p>
            <button className={styles.button} onClick={props.restartTestHandler}>Restart</button>
        </article>
    )
}