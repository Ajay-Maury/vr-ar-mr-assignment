'use client'

import { useState, useEffect } from 'react';
import './Timer.css'

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [text, setText] = useState(<></>);

  useEffect(() => {

    if (seconds <= 3) {
      setText(
        <div className='TimerTextInhale'>
          <p><h3>INHALE</h3></p>
          <p className='TimerText' > 3 SECONDS</p>
        </div>
      )
    }

    else if (seconds <= 5) {
      setText(
        <div className='TimerTextHold'>
          <p><h3>HOLD</h3></p>
          <p className='TimerText' > 2 SECONDS</p>
        </div>
      )
    }

    else if (seconds < 8) {
      setText(<div className='TimerTextExhale'>
        <p><h3>EXHALE</h3></p>
        <p className='TimerText' > 3 SECONDS</p>
      </div>
      )
    }

    else {
      setText(<></>)
    }

    if (seconds < 8) {
      const timer = setTimeout(() => {
        setSeconds(seconds + 1);
      }, 1000);

      return () => clearTimeout(timer);
    }

  }, [seconds]);

  return (
    <div className='TimerPage'>
      <div className='Circle1' />
      <div className='Circle2' />
      <div className='Circle3' />
      <div className='TimerTextContainer'>
        {text}
      </div>
    </div>
  );
};

export default Timer;
