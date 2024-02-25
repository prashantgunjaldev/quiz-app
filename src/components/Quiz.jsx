import { useCallback, useState } from "react";
import QUESTIONS from '../questions';

import Question from "./Question";
import Summary from "./Summary";
export default function Quiz(){
    const [answerState, setAnswerState] = useState('');
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex =
    answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const quizIsComple = activeQuestionIndex === QUESTIONS.length;

    const handleSelect = useCallback(function handleSelect(answer){
        setAnswerState('answered');
        setUserAnswers((prev)=>{
            return [...prev, answer];
        });

        setTimeout(()=>{
            if(answer === QUESTIONS[activeQuestionIndex].answers[0]){
                setAnswerState('correct');
            }else{
                setAnswerState('wrong');
            }

            setTimeout(()=>{
                setAnswerState('');
            }, 2000);

        },1000);
    },[activeQuestionIndex]);

    const handleSkipAnswer = useCallback(()=>{
        handleSelect(null);
    },[handleSelect]);

    if(quizIsComple){
        return <Summary userAnswers={userAnswers}/>;
    }

    console.log(activeQuestionIndex);

   

    return (
        <div id="quiz">
            <Question
                qId={activeQuestionIndex}
                answerState={answerState}
                handleSelect={handleSelect}
                selectedAnswer={userAnswers[userAnswers.length - 1]}
                handleSkipAnswer={handleSkipAnswer}
            />
        </div>
       );
}