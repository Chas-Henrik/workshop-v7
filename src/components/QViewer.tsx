'use client'

import styles from './QViewer.module.css';
import React, { useState } from "react";
import {QQViewer, QQViewerProps} from "@/components/QQViewer"; // Adjust the import path as necessary

export type QViewerProps = {
    id: number;
    name: string;
    questions: QQViewerProps[];
}

export function QViewer(props:QViewerProps): React.JSX.Element {
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ selectedRadioBtn, setSelectedRadioBtn ] = useState(-1);
    const maxIndex = props.questions ? (props.questions?.length - 1): 0;
    const currentQuestion = {...props?.questions[currentIndex], selectedRadio};

    function selectedRadio(selectedAns: number) {
        console.log(`Selected radio: ${id}`);
        setSelectedRadioBtn(selectedAns);
    }

    return (
        <article className={styles.QViewer}>
            <h2>{props.name}</h2>
            <QQViewer {...currentQuestion} />
            <div className={styles.buttons}>
                <button className={styles.button} onClick={() => setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex))}>Prev</button>
                <button className={styles.button} onClick={() => setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : prevIndex))}>Next</button>
            </div>
        </article>
    )
}
