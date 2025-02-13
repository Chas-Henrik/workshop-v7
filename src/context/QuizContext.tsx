"use client";

import { createContext, useState } from "react"

export type QuizQuestionContextType = {
    id: number;
    question: string;
    alternatives: string[];
    correctAnswer: string;
}

export type QuizContextType = {
    quizzes: QuizQuestionContextType[];
    setQuizzes: (quizParam: QuizQuestionContextType[]) => void;
}

export const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({children}: {children: React.ReactNode}) {

    const [quizzes, setQuizzes] = useState<QuizQuestionContextType[]>([])
    
    return (
        <QuizContext.Provider value={{ quizzes , setQuizzes }}>
            {children}
        </QuizContext.Provider>
    )

}


