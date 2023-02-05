import React, { useState } from 'react';
import './StackQueue.css';

export default function StackQueueUI() {
  const [mode, setMode] = useState('stack');
  const [array, setArray] = useState([]);

  const pushOperation = () => {
    let num = Math.floor(Math.random() * 100);
    let newArr = [...array, num];
    setArray(newArr);
  };

  const popOperation = () => {
    let newArr = [...array];
    if (mode === 'stack' && newArr.length > 0) {
      newArr.splice(newArr.length - 1, 1);
      setArray(newArr);
    } else if (mode === 'queue' && newArr.length > 0) {
      newArr.splice(0, 1);
      setArray(newArr);
    }
  };

  const selectStack = () => {
    setMode('stack');
  };

  const selectQueue = () => {
    setMode('queue');
  };

  return (
    <div className='container'>
      <div className='calls'>
        <div className='text-secondary'>
          <h2>SELECT MODE</h2>
        </div>
        <div className='actions'>
          <div>
            <button
              onClick={selectStack}
              className={`btn ${mode === 'stack' ? 'selected' : undefined}`}>
              STACK
            </button>
          </div>
          <div>OR</div>
          <div>
            <button
              onClick={selectQueue}
              className={`btn ${mode === 'queue' ? 'selected' : undefined}`}>
              QUEUE
            </button>
          </div>
        </div>

        <div className='text-secondary'>
          <h2>SELECT OPERATION</h2>
        </div>
        <div className='actions'>
          <div>
            <button onClick={pushOperation} className='btn selected'>
              PUSH
            </button>
          </div>
          <div>OR</div>
          <div>
            <button onClick={popOperation} className='btn selected'>
              POP
            </button>
          </div>
        </div>
      </div>
      <div className='container-stack'>
        {array.map((arr) => {
          return <div className='ds-element'>{arr}</div>;
        })}
      </div>
    </div>
  );
}
