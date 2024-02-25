import { useEffect, useState } from "react";

export default function Timer({timeout, onTimeout, mode}){

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(()=>{
        const timer = setTimeout(onTimeout,timeout);
        return ()=>{
            clearTimeout(timer);
        }
    },[timeout, onTimeout]);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setRemainingTime(pre=> pre - 250);
        }, 250);

        return ()=>{
            clearInterval(interval);
        }
    },[]);

    return <progress id='question-time' className={mode} max={timeout} value={remainingTime}></progress>
}