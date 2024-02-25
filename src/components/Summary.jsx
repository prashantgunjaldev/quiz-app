
import quizComplete from '../assets/quiz-complete.png';
import QUESTIONS from '../questions';

export default function Summary({userAnswers}) {

    const skipped = userAnswers.filter(a => a === null);
    const correct = userAnswers.filter((a,i) => a === QUESTIONS[i].answers[0]);
    
    const skippedShare = Math.round((skipped.length / userAnswers.length) * 100);
    const correctShare = Math.round((correct.length / userAnswers.length) * 100);
    const wrongShare = 100 - skippedShare - correctShare;

    return <div id="summary">
        <img src={quizComplete} alt="Victory"/>
        <h2>Quiz Complete!</h2>
        <div id="summary-stats">
            <p>
                <span className='number'>{skippedShare}%</span>
                <span className='text'>skipped</span>
            </p>
            <p>
                <span className='number'>{correctShare}%</span>
                <span className='text'>Correct</span>
            </p>
            <p>
                <span className='number'>{wrongShare}%</span>
                <span className='text'>Wrong</span>
            </p>
        </div>
        <ol>
            {
                userAnswers.map((answer, index)=>{
                    let cssClass = 'user-answer';
                    if(answer === null){
                        cssClass += ' skipped';
                    }else if(answer === QUESTIONS[index].answers[0]){
                        cssClass += ' correct';
                    }else {
                        cssClass += ' wrong';
                    }
                    return <li key={answer}>
                        <h3>{index+1}</h3>
                        <p className='question'>
                            {QUESTIONS[index].text}
                        </p>
                        <p className={cssClass}>{answer ?? 'Skipped'}</p>
                    </li>
                })
            }
        </ol>
    </div>;
}