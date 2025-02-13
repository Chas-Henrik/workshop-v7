"use client"

import styles from './Nav.module.css';
import React, { useContext, useEffect } from "react";
import { QuizQuestionType, QuizType, QuizContextType, QuizContext, QuizProvider } from "@/context/QuizContext";   

function Admin(): React.JSX.Element {
    const context = useContext(QuizContext);
    if(!context) throw new Error("No defined Quiz context");

    const quizQuestionArray: QuizQuestionType[] = [
        { 
            id: 1,
            question: "What is the capital of France?", 
            alternatives: ["Stockholm", "New York", "Paris", "London"],
            correctAnswer: "Paris" 
        },
        { 
            id: 2,
            question: "What is the capital of Spain?", 
            alternatives: ["Madrid", "New York", "Paris", "London"],
            correctAnswer: "Madrid" 
        },
        { 
            id: 3,
            question: "What is the capital of Italy?", 
            alternatives: ["Stockholm", "Rome", "Paris", "London"],
            correctAnswer: "Rome" 
        },
        {
            id: 4,
            question: "What is the capital of Germany?", 
            alternatives: ["Stockholm", "New York", "Berlin", "London"],
            correctAnswer: "Berlin" 
        },
        {
            id: 5,
            question: "What is the capital of Portugal?", 
            alternatives: ["Stockholm", "New York", "Paris", "Lisbon"],
            correctAnswer: "Lisbon" 
        }
    ];

    const quiz: QuizType[] = [{
        name: "Capitals",
        questions: quizQuestionArray
    }]


    useEffect(() => {
        console.log("Admin useEffect");
        context.setQuizzes(quiz);
    }, []);
    
    return (
        <div>
            <h1>Admin</h1>
        </div>
    )
}

export default Admin