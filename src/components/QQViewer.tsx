'use client'

import styles from './QQViewer.module.css';
import React from "react";
import { QuizQuestionType, QuizType, QuizContextType, QuizContext } from "@/context/QuizContext";

function QQViewer(props:QuizQuestionType): React.JSX.Element {
    if(!props) {
        return (<h2>No defined Quiz context</h2>)
    }

    return (
        <article className={styles.QQViewer}>
            <h2>{props.question}</h2>
            <ul>{props.alternatives.map((item, index) => <li key={`${props.id}${index}`}><input id={index} name={`Question${props.id}`} type="radio"/> {item}</li>)}</ul>
        </article>
    )
}

export default QQViewer