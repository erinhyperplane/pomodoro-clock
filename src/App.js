import React, {useState} from 'react';
import BreakLengthUnit from './breakLength';
import SessionLengthUnit from './sessionLength';
import ClockPanel from './clockPanel';





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

  
  useEffect(()=>{
    setTimer(sessionLength*60)
  },[sessionLength]);


  
  
  return (
    <div className="App">
      <h1 id="headline">Pomodoro Clock</h1>
      
      <div className="length-control-panels">
        <BreakLengthUnit breakLength={breakLength} setBreakLength={setBreakLength} />
        <SessionLengthUnit sessionLength={sessionLength} setSessionLength={setSessionLength} />
      </div>
      
      <ClockPanel currentMode={[mode,setMode]} currentTime={[time, setTimer]} activeStatus={[active,setActive]} handleReset={handleReset}  />
      
   
      <footer>Designed by anonymous</footer>
    </div>
  );
}

export default App 

