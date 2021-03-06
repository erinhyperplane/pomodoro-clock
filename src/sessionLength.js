import React from 'react';


export default function SessionLengthUnit({sessionLength, setSessionLength}){
    
    return(
        <div>
            <p>Session length</p>
            <div className="break-buttons">
                <button 
                    className="break-btn"
                    onClick={()=>{
                        if(sessionLength===1){
                            return;
                        }else{
                            setSessionLength(sessionLength-1)
                        }
                    }}
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