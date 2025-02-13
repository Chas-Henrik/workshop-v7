'use client'

import styles from './QQViewer.module.css';
import React from "react";

export type QQViewerProps = {
    id: number;
    question: string;
    alternatives: string[];
    correctAnswer: string;
    selectedRadio: (id: number) => void;
}

export function QQViewer(props:QQViewerProps): React.JSX.Element {
    if(!props) {
        return (<h2>No defined Quiz context</h2>)
    }

    return (
        <article className={styles.QQViewer}>
            <h2>{props && props.question}</h2>
            <ul>{props && props.alternatives.map((item, index) => <li key={`${props.id}${index}`}><input id={`${index}`} onChange={() => props.selectedRadio(index)} name={`Question${props.id}`} type="radio"/> {item}</li>)}</ul>
        </article>
    )
}
