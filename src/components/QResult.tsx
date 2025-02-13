'use client'

import styles from './QResult.module.css';
import React from "react";

export type QResultProps = {
    name: string;
    score: number;
    maxScore: number;
    restartTestHandler: () => void;
}

export function QResult(props: QResultProps): React.JSX.Element {

    return (
        <article className={styles.QResult}>
            <h2 className={styles.header}>Results: {props.name} Quiz</h2>
            <p className={styles.score}>{props.score}/{props.maxScore}</p>
            <button className={styles.button} onClick={props.restartTestHandler}>Restart</button>
        </article>
    )
}