import {useRef, useEffect, useState} from 'react'

const MutabaleRef = () => {
    const timerRef = useRef<number | null>(null);
    const [timer,setTimer] = useState(0);

    const stopTimer = () => {
        if(timerRef.current) window.clearInterval(timerRef.current);
    }
    useEffect(() => {
        timerRef.current = window.setInterval(()=>{
            setTimer(prevTimer => prevTimer + 1);
        },1000);
        
        return () => {
            stopTimer();
        }
    })

  return (
    <div>
        <p>Timer - {timer}</p>
        <button onClick={stopTimer}>Stop timer</button>
    </div>
  )
}

export default MutabaleRef