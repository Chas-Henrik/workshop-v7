'use client'

import styles from './QQViewer.module.css';
import React from "react";

export type QQViewerProps = {
    id: number;
    question: string;
    alternatives: string[];
    selectedAnswer: number;
    correctAnswer: string;
    selectRadioButtonHandler: (questionId: number, selectedAns: number) => void;
}

export function QQViewer(props:QQViewerProps): React.JSX.Element {

    return (
        <article className={styles.QQViewer}>
            <h2 className={styles.header}>{props ? props.question: ""}</h2>
            <ul>{props && props.alternatives?.map((item, index) => 
                <li className={styles.listItem} key={`${props.id}${index}`}>
                    <input className={styles.listItemInput} id={`${index}`} 
                        onChange={() => props.selectRadioButtonHandler(props.id, index)} 
                        name={`Question${props.id}`} 
                        type="radio"
                        checked={props.selectedAnswer === index}
                    />
                    <label className={styles.listItemLabel} htmlFor={`${index}`}>{item}</label>
                </li>)}
            </ul>
        </article>
    )
}
