import QUESTIONS from "../questions";
import Answers from "./Answers";
import Timer from "./Timer";

export default function Question ({
    qId, answerState, handleSelect, selectedAnswer, handleSkipAnswer
}){
    let timer = 15000;
    if(answerState !== ''){
        timer = 3000;
    }
    
    return <div id="question">
        <Timer 
        key={`t-${timer}`}
        timeout={timer} 
        mode={answerState}
        onTimeout={answerState == '' ? handleSkipAnswer : null}/>
        <h2>{QUESTIONS[qId].text}</h2>
        <Answers 
            key={`a-${qId}`}
            answers={QUESTIONS[qId].answers}
            selectedAnswer={selectedAnswer}
            answerState={answerState}
            onSelect={handleSelect}
        />
    </div>;
}