import React, {useState} from 'react';
import BreakLengthUnit from './breakLength';
import SessionLengthUnit from './sessionLength';
import ClockPanel from './clockPanel';



import './App.css';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  //console.log(breakLength);
  console.log(sessionLength);

  return (
    <div className="App">
      <h1 id="headline">Pomodoro Clock</h1>
      
      <div className="length-control-panels">
        <BreakLengthUnit breakLength={breakLength} setBreakLength={setBreakLength} />
        <SessionLengthUnit sessionLength={sessionLength} setSessionLength={setSessionLength} />
      </div>
      
      <ClockPanel />
   
      <footer>Designed by abc</footer>
    </div>
  );
}

export default App;

