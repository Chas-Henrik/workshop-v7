'use client'

import styles from './QViewer.module.css';
import React, { useState } from "react";
import {QQViewer, QQViewerProps} from "@/components/QQViewer"; // Adjust the import path as necessary

export type QViewerProps = {
    id: number;
    name: string;
    questions: QQViewerProps[];
    submitTestHandler?: ( questions: QViewerProps, resultsArr: number[] ) => void;
}

export function QViewer(props: QViewerProps): React.JSX.Element {
    const [ currentIndex, setCurrentIndex ] = useState(0);          // Index of the current question
    const questionsArr: QQViewerProps[] = props?.questions;
    const maxIndex = questionsArr ? (questionsArr?.length - 1): 0;
    const [ resultsArr, setResultsArr] = useState(questionsArr ? new Array(questionsArr.length).fill(-1): []); // Array to store the selected radio buttons
    const currentQuestion = questionsArr && { ...questionsArr[currentIndex], selectRadioButtonHandler, selectedAnswer: resultsArr[currentIndex] }; // Current question object

    function selectRadioButtonHandler(questionId: number, selectedAns: number) {
        setResultsArr((prevResultsArr) => {
            const newResultsArr = [...prevResultsArr];
            newResultsArr[questionId] = selectedAns;
            return newResultsArr;
        });
    }

    function submitHandler() {
        if(resultsArr.includes(-1)) {
            if(!confirm("You have not answered all questions. Do you want to submit anyway?")){
                return;
            }
        }
        if (props.submitTestHandler) {
            props.submitTestHandler(props, resultsArr);
        }
    }	


    return (
        <article className={styles.QViewer}>
            <h2 className={styles.header}>{props?.name}</h2>
            <QQViewer {...currentQuestion} />
            <div className={styles.buttons}>
                {<button className={styles.button} onClick={() => setCurrentIndex((prevIndex) =>  prevIndex - 1 )} disabled = {currentIndex <= 0}>Prev</button>}
                {<button className={styles.button} onClick={() => setCurrentIndex((prevIndex) => prevIndex + 1 )}  disabled = {currentIndex >= maxIndex}>Next</button>}
            </div>
            <button className={styles.submitButton} onClick={submitHandler}>Submit</button>
        </article>
    )
}
