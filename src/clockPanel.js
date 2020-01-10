import React from 'react';
import { useState } from 'react';


export default function ClockPanel({ sessionLength, breakLength}){
    const [minute, setMinute] = useState({sessionLength});
    console.log({minute});
    
    return(
        <div>
            
            <div className="timer-panel" >
                <p>SESSION</p>
                <b>25:00</b>
            </div>
        </div>
    )
  }