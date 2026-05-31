import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useReactionGame } from '../hooks/useReactionGame';
import '../styles/reaction-test.css';

export default function ReactionTest() {
  const {
    gameState,
    reactionTime,
    startWaiting,
    handleReact,
    handleTooSoon,
  } = useReactionGame();

  useEffect(() => {
    document.title = 'Reaction Test — Zozimus Technologies';
  }, []);

  function onGameClick() {
    if (gameState === 'waiting') handleTooSoon();
    else if (gameState === 'react') handleReact();
  }

  return (
    <>
      <Link className="reaction-back-link" to="/forfun">← All games</Link>
      <div className={`game ${gameState}`} onClick={onGameClick}>
        <div className="overlay">

          {gameState === 'idle' && (
            <div key="idle">
              <h1>Reaction Test</h1>
              <p>
                Click as fast as you can when the screen turns{' '}
                <span className="green">green</span>.
              </p>
              <button onClick={startWaiting}>Start</button>
            </div>
          )}

          {gameState === 'waiting' && (
            <div key="waiting">
              <h1 className="pulse">Wait for green&hellip;</h1>
              <p>Don&apos;t click yet!</p>
            </div>
          )}

          {gameState === 'react' && (
            <div key="react">
              <h1>CLICK NOW!</h1>
              <p>Tap anywhere or press any key</p>
            </div>
          )}

          {gameState === 'toosoon' && (
            <div key="toosoon">
              <h1>Too soon!</h1>
              <p>You clicked before the screen turned green.</p>
              <button onClick={startWaiting}>Try again</button>
            </div>
          )}

          {gameState === 'result' && (
            <div key="result">
              {reactionTime !== null && (
                <h1>{reactionTime} ms</h1>
              )}
              <button onClick={startWaiting}>Try again</button>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
