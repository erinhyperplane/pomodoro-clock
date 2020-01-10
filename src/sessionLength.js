import React from 'react';


export default function SessionLengthUnit({sessionLength, setSessionLength}){
    
    return(
        <div>
            <p>session length</p>
            <div className="break-buttons">
                <button 
                    className="break-btn"
                    onClick={()=>setSessionLength(sessionLength-1)}
                >
                    ↓
                </button>
                <p>{sessionLength}</p>
                
                <button 
                    className="break-btn"
                    onClick={()=>setSessionLength(sessionLength+1)}
                >
                    ↑
                </button>
            </div>
        </div>
    )
}