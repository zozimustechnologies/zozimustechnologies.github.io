import { useCallback, useEffect, useRef, useState } from 'react';

const MIN_DELAY_MS = 1500;
const MAX_DELAY_MS = 5000;

export function useReactionGame() {
  const [gameState, setGameState] = useState('idle');
  const [reactionTime, setReactionTime] = useState(null);

  const waitTimerRef = useRef(null);
  const reactStartRef = useRef(null);

  const clearWaitTimer = () => {
    if (waitTimerRef.current !== null) {
      clearTimeout(waitTimerRef.current);
      waitTimerRef.current = null;
    }
  };

  const startWaiting = useCallback(() => {
    clearWaitTimer();
    setGameState('waiting');
    const delay = Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS) + MIN_DELAY_MS;
    waitTimerRef.current = setTimeout(() => {
      waitTimerRef.current = null;
      reactStartRef.current = performance.now();
      setGameState('react');
    }, delay);
  }, []);

  const handleReact = useCallback(() => {
    const elapsed = reactStartRef.current !== null
      ? Math.round(performance.now() - reactStartRef.current)
      : null;
    setReactionTime(elapsed);
    setGameState('result');
  }, []);

  const handleTooSoon = useCallback(() => {
    clearWaitTimer();
    setGameState('toosoon');
  }, []);

  const reset = useCallback(() => {
    clearWaitTimer();
    setGameState('idle');
  }, []);

  // Keyboard handler during active states
  useEffect(() => {
    const onKey = (e) => {
      if (e.repeat) return;
      if (gameState === 'waiting') handleTooSoon();
      else if (gameState === 'react') handleReact();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [gameState, handleReact, handleTooSoon]);

  // Cleanup on unmount
  useEffect(() => () => clearWaitTimer(), []);

  return {
    gameState,
    reactionTime,
    startWaiting,
    handleReact,
    handleTooSoon,
    reset,
  };
}
