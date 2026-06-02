import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../styles/update-simulator.css';

const STEPS = [
  'Checking system requirements...',
  'Downloading unnecessary bloatware...',
  "Installing fonts you'll never use...",
  'Preparing to prepare update preparation...',
  'Optimising left-handed bits...',
  'Reticulating splines...',
  'Downloading more RAM...',
  'Defragmenting the internet...',
  'Convincing RAM to cooperate...',
  'Negotiating with the registry...',
  'Uploading your files to our servers...',
  'Asking ChatGPT for help...',
  'Making coffee...',
  'Undoing previous update...',
  'Installing update that fixes the last update...',
  'Rebooting the blockchain...',
  'Calculating the meaning of life...',
  'Removing free storage space...',
  'Googling error codes...',
  'Finalising...',
];

const DONE_QUIPS = [
  'Your computer is now slightly worse than before.',
  '3 features removed. 12 new ads enabled.',
  'The update that fixes this update arrives Tuesday.',
  'Please update again tomorrow.',
  'Warranty voided successfully.',
];

const FAIL_REASONS = [
  'Error 0x80070057: Coffee maker not responding.',
  'Critical: Left-handed bits rejected the update.',
  'RAM refused to cooperate. Aborting.',
  'Splines could not be reticulated.',
  'The meaning of life was not found in registry.',
];

const STALL_TAUNTS = [
  'Almost there...',
  'Just a moment...',
  'Still going...',
  'Please wait...',
  'Nearly done...',
  "Don't turn off your computer...",
  'Seriously, almost done...',
  'Any second now...',
];

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function UpdateSimulator() {
  const [phase, setPhase] = useState('idle');
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [stallTaunt, setStallTaunt] = useState(0);
  const [doneQuip] = useState(() => pickRandom(DONE_QUIPS));
  const [failReason] = useState(() => pickRandom(FAIL_REASONS));
  const [updateCount] = useState(() => Math.floor(randomBetween(12, 91)));
  const [updateSize] = useState(() => randomBetween(200, 2000).toFixed(0) + ' MB');

  const timerRef = useRef(null);
  const stallTimerRef = useRef(null);
  const stallIntervalRef = useRef(null);

  useEffect(() => {
    document.title = 'Update Simulator — Zozimus Technologies';
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
      clearTimeout(stallTimerRef.current);
      clearInterval(stallIntervalRef.current);
    };
  }, []);

  const advanceStep = useCallback((idx) => {
    if (idx >= STEPS.length) {
      setProgress(99);
      setPhase('stalled');

      let tauntIdx = 0;
      stallIntervalRef.current = setInterval(() => {
        tauntIdx = (tauntIdx + 1) % STALL_TAUNTS.length;
        setStallTaunt(tauntIdx);
      }, 2000);

      stallTimerRef.current = setTimeout(() => {
        clearInterval(stallIntervalRef.current);
        setPhase(Math.random() < 0.65 ? 'complete' : 'failed');
      }, 8000);
      return;
    }

    setStepIndex(idx);
    const target = Math.round((idx / STEPS.length) * 97);
    setProgress(target);
    timerRef.current = setTimeout(
      () => advanceStep(idx + 1),
      randomBetween(500, 1400),
    );
  }, []);

  function handleCheck() {
    setPhase('checking');
    timerRef.current = setTimeout(() => setPhase('found'), 2200);
  }

  function handleInstall() {
    setPhase('updating');
    setProgress(0);
    setStepIndex(0);
    timerRef.current = setTimeout(() => advanceStep(0), 300);
  }

  function handleReset() {
    clearTimeout(timerRef.current);
    clearTimeout(stallTimerRef.current);
    clearInterval(stallIntervalRef.current);
    setPhase('idle');
    setProgress(0);
    setStepIndex(0);
    setStallTaunt(0);
  }

  return (
    <div className="usim-root">
      <Link className="usim-back" to="/forfun">← All games</Link>

      <div className="usim-window">

        {phase === 'idle' && (
          <div className="usim-panel" key="idle">
            <div className="usim-icon">🛡️</div>
            <h1 className="usim-title">System Update</h1>
            <p className="usim-sub">Keep your system up to date with the latest improvements and critical security fixes.</p>
            <button className="usim-btn usim-btn-primary" onClick={handleCheck}>
              Check for Updates
            </button>
          </div>
        )}

        {phase === 'checking' && (
          <div className="usim-panel" key="checking">
            <div className="usim-spinner" />
            <p className="usim-label">Checking for updates…</p>
          </div>
        )}

        {phase === 'found' && (
          <div className="usim-panel" key="found">
            <div className="usim-icon">📦</div>
            <h2 className="usim-title">{updateCount} Updates Available</h2>
            <p className="usim-sub">{updateSize} · Includes critical security patches and important improvements.</p>
            <button className="usim-btn usim-btn-primary" onClick={handleInstall}>
              Install Now
            </button>
            <button className="usim-btn usim-btn-ghost" onClick={handleReset}>
              Remind Me Tomorrow
            </button>
          </div>
        )}

        {(phase === 'updating' || phase === 'stalled') && (
          <div className="usim-panel" key="updating">
            <div className="usim-icon">⚙️</div>
            <h2 className="usim-title">
              {phase === 'stalled' ? 'Almost done…' : 'Updating…'}
            </h2>
            <div className="usim-bar-track">
              <div
                className={`usim-bar-fill${phase === 'stalled' ? ' usim-bar-stalled' : ''}`}
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="usim-bar-meta">
              <span className="usim-step-label">
                {phase === 'stalled' ? STALL_TAUNTS[stallTaunt] : STEPS[stepIndex]}
              </span>
              <span className="usim-pct">{progress}%</span>
            </div>
            <p className="usim-warning">Do not turn off your computer.</p>
          </div>
        )}

        {phase === 'complete' && (
          <div className="usim-panel" key="complete">
            <div className="usim-icon usim-icon-pop">✅</div>
            <h2 className="usim-title">Update Complete!</h2>
            <p className="usim-sub">{doneQuip}</p>
            <button className="usim-btn usim-btn-primary" onClick={handleReset}>
              Restart Now
            </button>
            <button className="usim-btn usim-btn-ghost" onClick={handleReset}>
              Restart Later
            </button>
          </div>
        )}

        {phase === 'failed' && (
          <div className="usim-panel" key="failed">
            <div className="usim-icon">❌</div>
            <h2 className="usim-title usim-title-danger">Update Failed</h2>
            <p className="usim-error-code">{failReason}</p>
            <p className="usim-sub">Reverting changes… Your system will be restored to its previous broken state.</p>
            <button className="usim-btn usim-btn-ghost" onClick={handleReset}>
              Try Again
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
