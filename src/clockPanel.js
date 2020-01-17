import React from 'react';



export default function ClockPanel({currentMode, currentTime, activeStatus, handleReset}){
    /* need to pass the state from app to here as minute and seconds */
    
    const [mode] = currentMode
    const [time] = currentTime
    const [active,setActive] = activeStatus;
   

    const clockify = ()=> {
        let minute = Math.floor(time/60);
        let seconds = time - minute*60;
        seconds = seconds < 10 ? `0${seconds}`: seconds
        minute = minute < 10 ? `0${minute}`:minute
        return `${minute}:${seconds}`
    }
    

    

    return(
        <div>
            
            <div className="timer-panel" >
                <p>{mode === 'session'? 'Session':'Break'}</p>
                {clockify()}
                <div>
                    {/* pause|resume button */}
                    <button
                        className="control-btn"
                        onClick={()=>{
                            setActive(!active)
                            
                        }}
                    >
                        {active?<p>||</p>:<p>▶</p>}
                    </button>

                    {/* reset button */}
                    <button
                        className="control-btn"
                        onClick={()=>{
                            handleReset();
                        }}
                    >
                        <p>Reset</p>
                    </button>
                </div>
                
                
            </div>
        </div>
    )
  }

    
/*     const onClickPauseplayBtn = ()=>{
        
        let control = timerState === "running"?
        (switchTimerState("stopped"), intervalID&&clearInterval(intervalID), console.log(timerState)):
        (beginCountDown(),  switchTimerState("running"), console.log(timerState))
        
    }
 */




