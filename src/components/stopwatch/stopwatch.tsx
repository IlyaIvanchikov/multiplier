import React, { useState, useEffect } from 'react';

interface TimerProps {
  setTimer: React.Dispatch<React.SetStateAction<string>>;
  clean: boolean;
  viewScore: boolean;
}

const StopWatch = ({ setTimer, clean, viewScore }: TimerProps) => {
  const [stopWatchSecond, setStopWatchSecond] = useState<number>(0);
  const [stopWatchMiliSecond, setStopWatchMiliSecond] = useState<number>(0);
  useEffect(() => {
    const interval = setTimeout(() => {
      if (clean || viewScore) {
        setStopWatchSecond(0);
        setStopWatchMiliSecond(0);
      } else {
        setStopWatchMiliSecond(stopWatchMiliSecond + 1);
        setTimer(`${stopWatchSecond}.${stopWatchMiliSecond} сек.`);
      }
    }, 100);
    if (stopWatchMiliSecond === 10) {
      setStopWatchSecond(stopWatchSecond + 1);
      setStopWatchMiliSecond(0);
    }
    return () => clearInterval(interval);
  }, [stopWatchSecond, stopWatchMiliSecond, setTimer, clean, viewScore]);

  return (
    <div
      style={{
        border: '3px solid #9dbd2c',
        width: '15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 style={{ color: '#5bc2dc', margin: '5px' }}>
        {stopWatchSecond}:{stopWatchMiliSecond}
      </h1>
    </div>
  );
};

export default StopWatch;
