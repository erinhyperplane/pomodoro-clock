import React from 'react';

export default function BreakLengthUnit({breakLength, setBreakLength}){
    

    return(
        <div>
            <p>Break Length</p>
            <div className="break-buttons">
                <button 
                    className="break-btn"
                    onClick={()=>setBreakLength(breakLength-1)}
                >
                    ↓
                </button>
                
                <p>{breakLength}</p>

                <button 
                    className="break-btn"
                    onClick={()=>setBreakLength(breakLength+1)}
                >
                    ↑
                </button>
            </div>
        </div>
    )
}