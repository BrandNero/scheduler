import { useState } from 'react';

const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  
  const transition = (newMode, replace = false) => {
    if (replace) {
      setMode(newMode);
      setHistory(prev => [...prev.slice(0, -1), newMode]);
    } else {
      setMode(newMode);
      setHistory(prev => [...prev, newMode]);
    }
  };
  
  const back = () => {
    if (history.length > 1) {
      setHistory(prev => [...prev.slice(0, -1)]);
      setMode(history[history.length - 2]);
    }
  };
  
  return { mode, transition, back };
}

export default useVisualMode;