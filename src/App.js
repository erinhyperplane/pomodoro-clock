import React, {useState} from 'react';
import BreakLengthUnit from './breakLength';
import SessionLengthUnit from './sessionLength';
import ClockPanel from './clockPanel';

import useInterval from 'react-useinterval';


/* todos
1. add timer count down
2. add switch session
3. add sound?
*/


import './App.css';
import { useEffect } from 'react';


function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [mode, setMode] = useState('session');
  const [time, setTimer] = useState(sessionLength*60);
  const [active,setActive] = useState(false);

  const handleReset = ()=> {
    setActive(false);
    setBreakLength(5);
    setSessionLength(25);
    setMode('session');
    setTimer(25*60);
  }


  useInterval(()=> setTimer(time - 1), active?1000:null);

  useEffect(()=>{
    setTimer(sessionLength*60)
  },[sessionLength]);

  useEffect(()=>{
    if(time===0 && mode === 'session'){
      setMode('break')
      setTimer(breakLength*60)
    }else if(time === 0 && mode === 'break'){
      setMode('session')
      setTimer(sessionLength*60)
    }
  },[time, sessionLength, breakLength, mode])

 
  

  
  
  return (
    <div className="App">
      <h1 id="headline">Pomodoro Clock</h1>
      
      <div className="length-control-panels">
        <BreakLengthUnit breakLength={breakLength} setBreakLength={setBreakLength} />
        <SessionLengthUnit sessionLength={sessionLength} setSessionLength={setSessionLength} />
      </div>
      
      <ClockPanel currentMode={[mode,setMode]} currentTime={[time, setTimer]} activeStatus={[active,setActive]} handleReset={handleReset}  />
      
   
      <footer>Designed by ejxhyperplane</footer>
      <p id="foot-note">*the idea of this project is inspired by FCC's react project.</p>
    </div>
  );
}

export default App 

