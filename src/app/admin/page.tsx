"use client"

import styles from './Nav.module.css';
import React, { useContext, useEffect } from "react";
import { QuizQuestionContextType, QuizContextType, QuizContext, QuizProvider } from "@/context/QuizContext";   

function Admin(): React.JSX.Element {
    const context = useContext(QuizContext);
    if(!context) throw new Error("No defined Quiz context");

    const quizArray: QuizQuestionContextType[] = [
        { 
            question: "What is the capital of France?", 
            alternatives: ["Stockholm", "New York", "Paris", "London"],
            correctAnswer: "Paris" 
        },
        { 
            question: "What is the capital of Spain?", 
            alternatives: ["Madrid", "New York", "Paris", "London"],
            correctAnswer: "Madrid" 
        },
        { 
            question: "What is the capital of Italy?", 
            alternatives: ["Stockholm", "Rome", "Paris", "London"],
            correctAnswer: "Rome" 
        },
        { 
            question: "What is the capital of Germany?", 
            alternatives: ["Stockholm", "New York", "Berlin", "London"],
            correctAnswer: "Berlin" 
        },
        { 
            question: "What is the capital of Portugal?", 
            alternatives: ["Stockholm", "New York", "Paris", "Lisbon"],
            correctAnswer: "Lisbon" 
        }
    ];

    useEffect(() => {
        console.log("Admin useEffect");
        context.setQuizzes(quizArray);
    }, []);
    
    return (
        <div>
            <h1>Admin</h1>
        </div>
    )
}

export default Admin