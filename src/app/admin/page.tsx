"use client"

import styles from './Nav.module.css';
import React, { useContext, useEffect } from "react";
import { QuizQuestionType, QuizType, QuizContextType, QuizContext, QuizProvider } from "@/context/QuizContext";   

function Admin(): React.JSX.Element {
    const context = useContext(QuizContext);
    if(!context) throw new Error("No defined Quiz context");

    const quiz: QuizType[] = [
        {
        id: 0,
        name: "Capitals",
        questions: [
            { 
                id: 0,
                question: "What is the capital of France?", 
                alternatives: ["Stockholm", "New York", "Paris", "London"],
                correctAnswer: "Paris"
            },
            { 
                id: 1,
                question: "What is the capital of Spain?", 
                alternatives: ["Madrid", "New York", "Paris", "London"],
                correctAnswer: "Madrid"
            },
            { 
                id: 2,
                question: "What is the capital of Italy?", 
                alternatives: ["Stockholm", "Rome", "Paris", "London"],
                correctAnswer: "Rome"
            },
            {
                id: 3,
                question: "What is the capital of Germany?", 
                alternatives: ["Stockholm", "New York", "Berlin", "London"],
                correctAnswer: "Berlin"
            },
            {
                id: 4,
                question: "What is the capital of Portugal?", 
                alternatives: ["Stockholm", "New York", "Paris", "Lisbon"],
                correctAnswer: "Lisbon"
            }
        ]
        },
        {
        id: 1,
        name: "Math",
        questions: [
            { 
                id: 0,
                question: "What is 2+2?", 
                alternatives: ["1", "4", "3", "2"],
                correctAnswer: "4"
            },
            { 
                id: 1,
                question: "What is 3*3?", 
                alternatives: ["9", "6", "3", "12"],
                correctAnswer: "9"
            },
            { 
                id: 2,
                question: "What is 10-5?", 
                alternatives: ["5", "3", "6", "7"],
                correctAnswer: "5"
            },
            {
                id: 3,
                question: "What is 4*4?", 
                alternatives: ["16", "12", "8", "4"],
                correctAnswer: "16"
            },
            {
                id: 4,
                question: "What is 100/10?", 
                alternatives: ["10", "20", "30", "40"],
                correctAnswer: "10"
            }
        ]
        },
        {
        id: 2,
        name: "Science",
        questions: [
            { 
                id: 0,
                question: "What is the chemical symbol for water?", 
                alternatives: ["H2O", "CO2", "O2", "H2SO4"],
                correctAnswer: "H2O"
            },
            { 
                id: 1,
                question: "What is the chemical symbol for carbon dioxide?", 
                alternatives: ["H2O", "CO2", "O2", "H2SO4"],
                correctAnswer: "CO2"
            },
            { 
                id: 2,
                question: "What is the chemical symbol for oxygen?", 
                alternatives: ["H2O", "CO2", "O2", "H2SO4"],
                correctAnswer: "O2"
            },
            {
                id: 3,
                question: "What is the chemical symbol for sulfuric acid?", 
                alternatives: ["H2O", "CO2", "O2", "H2SO4"],
                correctAnswer: "H2SO4"
            },
            {
                id: 4,
                question: "What is the chemical symbol for nitrogen?", 
                alternatives: ["N2", "CO2", "O2", "H2SO4"],
                correctAnswer: "N2"
            }
        ]
        },
        {
        id: 3,
        name: "History",
        questions: [
            { 
                id: 0,
                question: "In what year did World War I start and end?", 
                alternatives: ["1914-1918", "1915-1919", "1916-1920", "1917-1921"],
                correctAnswer: "1914-1918"
            },
            { 
                id: 1,
                question: "In what year did World War II start and end?", 
                alternatives: ["1939-1945", "1940-1946", "1941-1947", "1942-1948"],
                correctAnswer: "1939-1945"
            },
            { 
                id: 2,
                question: "In what year did the American Civil War start and end?", 
                alternatives: ["1861-1865", "1862-1866", "1863-1867", "1864-1868"],
                correctAnswer: "1861-1865"
            },
            {
                id: 3,
                question: "In what year did the French Revolution start and end?", 
                alternatives: ["1789-1799", "1790-1800", "1791-1801", "1792-1802"],
                correctAnswer: "1789-1799"
            },
            {
                id: 4,
                question: "In what year did the Russian Revolution start and end?", 
                alternatives: ["1917-1923", "1918-1924", "1919-1925", "1920-1926"],
                correctAnswer: "1917-1923"
            }
        ]
        },
        {
        id: 4,
        name: "Geography",
        questions: [
            { 
                id: 0,
                question: "What is the capital of France?", 
                alternatives: ["Stockholm", "New York", "Paris", "London"],
                correctAnswer: "Paris"
            },
            { 
                id: 1,
                question: "What is the capital of Spain?", 
                alternatives: ["Madrid", "New York", "Paris", "London"],
                correctAnswer: "Madrid"
            },
            { 
                id: 2,
                question: "What is the capital of Italy?", 
                alternatives: ["Stockholm", "Rome", "Paris", "London"],
                correctAnswer: "Rome"
            },
            {
                id: 3,
                question: "What is the capital of Germany?", 
                alternatives: ["Stockholm", "New York", "Berlin", "London"],
                correctAnswer: "Berlin"
            },
            {
                id: 4,
                question: "What is the capital of Portugal?", 
                alternatives: ["Stockholm", "New York", "Paris", "Lisbon"],
                correctAnswer: "Lisbon"
            }
        ]
        },
        {
        id: 5,
        name: "Literature",
        questions: [
            { 
                id: 0,
                question: "Who wrote the book '1984'?", 
                alternatives: ["George Orwell", "Aldous Huxley", "Ernest Hemingway", "F. Scott Fitzgerald"],
                correctAnswer: "George Orwell"
            },
            { 
                id: 1,
                question: "Who wrote the book 'Brave New World'?", 
                alternatives: ["George Orwell", "Aldous Huxley", "Ernest Hemingway", "F. Scott Fitzgerald"],
                correctAnswer: "Aldous Huxley"
            }
        ]
        }
    ]


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