"use client";

import { createContext, useState } from "react"

export type QuizQuestionType = {
    id: number;
    question: string;
    alternatives: string[];
    correctAnswer: string;
}

export type QuizType = {
    key: number;
    name: string;
    questions: QuizQuestionType[];
}

export type QuizContextType = {
    quizzes: QuizType[];
    setQuizzes: (quizParam: QuizType[]) => void;
}

export const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({children}: {children: React.ReactNode}) {

    const [quizzes, setQuizzes] = useState<QuizType[]>([]);
    
    return (
        <QuizContext.Provider value={{ quizzes , setQuizzes }}>
            {children}
        </QuizContext.Provider>
    )

}


