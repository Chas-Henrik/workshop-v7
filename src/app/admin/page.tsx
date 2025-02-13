"use client"

import styles from './Nav.module.css';
import React, { useContext, useEffect } from "react";
import { QuizQuestionType, QuizType, QuizContextType, QuizContext, QuizProvider } from "@/context/QuizContext";   
import QuestionForm from "@/components/QuestionForm"
import { Inputs } from "@/components/QuestionForm"

function Admin(): React.JSX.Element {
    const context = useContext(QuizContext);
    if(!context) throw new Error("No defined Quiz context");
    const { quizzes, setQuizzes } = context
    
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

    const handleQuestionSubmit = (data : Inputs) => {

        const quiz = quizzes.find(quiz => quiz.name === data.quizName)
        
        if (quiz) {
            const {alternative1, alternative2, alternative3, alternative4} = data;
            const newQuestion : QuizQuestionType = {
                                                        id: quiz.questions[quiz.questions.length -1].id + 1,
                                                        question: data.question,  
                                                        alternatives: [alternative1, alternative2, alternative3, alternative4],
                                                        correctAnswer: data.correctAnswer
                                                    }
            const quizIndex = quizzes.indexOf(quiz)                                        
            quizzes[quizIndex].questions.push(newQuestion);  
            setQuizzes(quizzes);                                 
        }                        
        console.log(quizzes)               
    }

    useEffect(() => {
        console.log("Admin useEffect");
        context.setQuizzes(quiz);
    }, []);
    
    return (
        <div>
            <h1>Admin</h1>
            <QuestionForm submitCallback={handleQuestionSubmit}/>
        </div>
    )
}

export default Admin