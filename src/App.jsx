import { useState, useRef } from 'react'
import './App.css'
function App() {
    const [startTime, setStartTime] = useState(0)
    const [now, setNow] = useState(0)
    const intervalRef = useRef(null)

    function handleStart() {
        setStartTime(Date.now())
        setNow(Date.now())

        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
            setNow(Date.now())
        }, 10)

    }
    function handleStop() {
        clearInterval(intervalRef.current)
    }

    let secondpassed=0
    if(startTime!=null && now!=null){
        secondpassed=(now-startTime)/1000
    }


    return (
        <>
        <h1>Time passed:</h1> <h1>{secondpassed.toFixed(3)}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        </>
    )
}

export default App
