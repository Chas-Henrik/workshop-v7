import { useForm, SubmitHandler } from "react-hook-form";
import { useContext } from "react";
import styles from "@/components/QuestionForm.module.css"

interface QuestionFormProp {
    submitCallback : (data : Inputs) => void;
}

export type Inputs = {
    quizName : string;
    question : string;
    alternative1 : string;
    alternative2 : string;
    alternative3 : string;
    alternative4 : string;
    correctAnswer : string;
}

export default function QuestionForm({ submitCallback } : QuestionFormProp) {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const onSubmit : (SubmitHandler<Inputs>) = (data) => {
        
        submitCallback(data)
    };

    return (
        <>
        <h2>Add a question to a quiz</h2>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label className={styles.label} htmlFor="quiz-name">Quizname</label>
            <input className={styles.input} id="quiz-name" type="text" {...register("quizName", {required: true})}/>
            <label className={styles.label} htmlFor="question">Question</label>
            <input className={styles.input} id="question" type="text" {...register("question", {required: true})}/>
            <label className={styles.label} htmlFor="alternative1">Alternative 1</label>
            <input className={styles.input} id="alternative1" type="text" {...register("alternative1", {required: true})}/>
            <label className={styles.label} htmlFor="alternative2">Alternative 2</label>
            <input className={styles.input} id="alternative2" type="text" {...register("alternative2", {required: true})}/>
            <label className={styles.label} htmlFor="alternative2">Alternative 3</label>
            <input className={styles.input} id="alternative3" type="text" {...register("alternative3", {required: true})}/>
            <label className={styles.label} htmlFor="alternative2">Alternative 4</label>
            <input className={styles.input} id="alternative4" type="text" {...register("alternative4", {required: true})}/>
            <label className={styles.label} htmlFor="correctAnswer">Correct answer</label>
            <input className={styles.input} id="correct-answer" type="text" {...register("correctAnswer", {required: true})}/>
            <input type="submit"/>
        </form>
        </>
    )
}