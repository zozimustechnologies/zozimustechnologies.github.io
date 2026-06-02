import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import appleImg from '../images/apple.jpg';
import appleTransparentImg from '../images/apple_transparent.png';
import msLogoImg from '../images/MSlogo.png';
import '../styles/os-update-simulator.css';

/* ─── Constants ─────────────────────────────────────────── */

const UNITS = [
  { value: 'seconds', label: 'Seconds' },
  { value: 'minutes', label: 'Minutes' },
  { value: 'hours',   label: 'Hours'   },
];

const MAC_STEPS = [
  { at: 0,  text: 'Preparing update…' },
  { at: 12, text: 'Downloading packages…' },
  { at: 28, text: 'Verifying packages…' },
  { at: 44, text: 'Installing update…' },
  { at: 60, text: 'Configuring system…' },
  { at: 76, text: 'Optimising system…' },
  { at: 88, text: 'Almost done…' },
  { at: 95, text: 'Finishing up…' },
];

const WIN_STEPS = [
  { at: 0,  text: 'Downloading updates (0%)' },
  { at: 25, text: 'Downloading updates (25%)' },
  { at: 40, text: 'Installing updates (40%)' },
  { at: 65, text: 'Configuring settings' },
  { at: 85, text: 'Finishing installation' },
];

function getStep(steps, pct) {
  let t = steps[0].text;
  for (const s of steps) { if (pct >= s.at) t = s.text; }
  return t;
}

/* ─── Windows Logo ──────────────────────────────────────── */

function WindowsLogo({ size = 64, white = false }) {
  const gap  = Math.round(size * 0.08);
  const pane = Math.round((size - gap) / 2);
  const colors = white
    ? ['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.9)', 'rgba(255,255,255,0.9)', 'rgba(255,255,255,0.9)']
    : ['#f25022', '#7fba00', '#00a4ef', '#ffb900'];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `${pane}px ${pane}px`, gap, width: size, height: size, flexShrink: 0 }}>
      {colors.map((c, i) => (
        <div key={i} style={{ background: c, borderRadius: 2 }} />
      ))}
    </div>
  );
}

/* ── Apple Logo ─────────────────────────────────────────── */

function AppleLogo() {
  return <img src={appleImg} alt="Apple" className="mac-apple-img" />;
}

/* ─── Windows dot spinner ───────────────────────────────── */

function WinSpinner() {
  const dots = 5;
  const r = 14; // radius in px
  return (
    <div className="win-spinner-wrap">
      {Array.from({ length: dots }).map((_, i) => {
        const angle = (i / dots) * 2 * Math.PI - Math.PI / 2;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        return (
          <span
            key={i}
            className="win-dot"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              animationDelay: `${(i / dots) * -1.25}s`,
            }}
          />
        );
      })}
    </div>
  );
}

/* ─── Animated dots ─────────────────────────────────────── */

function AnimDots() {
  const [n, setN] = useState(1);
  useEffect(() => {
    const t = setInterval(() => setN(p => (p % 3) + 1), 500);
    return () => clearInterval(t);
  }, []);
  return <span>{'.'.repeat(n)}</span>;
}

/* ─── Idle-hide hook ─────────────────────────────────── */

function useIdleHide(delay = 5000) {
  const [hidden, setHidden] = useState(false);
  const timerRef = useRef(null);

  const reset = useCallback(() => {
    setHidden(false);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setHidden(true), delay);
  }, [delay]);

  useEffect(() => {
    reset();
    return () => clearTimeout(timerRef.current);
  }, [reset]);

  return [hidden, reset];
}

/* ─── macOS Fullscreen ──────────────────────────────────── */

function MacScreen({ pct, done, onExit }) {
  const [hidden, resetIdle] = useIdleHide(5000);
  return (
    <div
      className={`os-overlay mac-overlay${hidden ? ' os-cursor-hidden' : ''}`}
      onMouseMove={resetIdle}
    >
      <div className="mac-inner">
        <AppleLogo />
        {done ? (
          <div className="mac-done-group">
            <p className="mac-done-title">Update Complete</p>
            <button className="mac-restart-btn" onClick={onExit}>Restart Now</button>
          </div>
        ) : (
          <div className="mac-bar-wrap">
            <div className="mac-bar-track">
              <div className="mac-bar-fill" style={{ width: `${pct}%` }} />
            </div>
          </div>
        )}
      </div>
      <p className={`os-esc-hint${hidden ? ' os-hint-hidden' : ''}`}>Press Esc to exit</p>
    </div>
  );
}

/* ─── Windows Fullscreen ────────────────────────────────── */

function WindowsScreen({ pct, done, onExit }) {
  const [hidden, resetIdle] = useIdleHide(5000);
  return (
    <div
      className={`os-overlay win-overlay${hidden ? ' os-cursor-hidden' : ''}`}
      onMouseMove={resetIdle}
    >
      <div className="win-inner">
        {done ? (
          <>
            <WinSpinner />
            <p className="win-pct-label">Your PC will restart shortly.</p>
            <p className="win-keep-on">Please keep your computer on.</p>
          </>
        ) : (
          <>
            <WinSpinner />
            <p className="win-pct-label">You are {pct}% there.</p>
            <p className="win-keep-on">Please keep your computer on.</p>
          </>
        )}
      </div>
      <p className="win-footer">Your computer may restart a few times.</p>
      <p className={`os-esc-hint${hidden ? ' os-hint-hidden' : ''}`}>Press Esc to exit</p>
    </div>
  );
}

/* ─── Main ──────────────────────────────────────────────── */

export default function OsUpdateSimulator() {
  const [phase, setPhase]     = useState('pick'); // 'pick' | 'time' | 'running' | 'done'
  const [os, setOs]           = useState(null);   // 'mac' | 'windows'
  const [amount, setAmount]   = useState('');
  const [unit, setUnit]       = useState('minutes');
  const [progress, setProgress] = useState(0);

  const startRef = useRef(null);
  const durRef   = useRef(0);
  const rafRef   = useRef(null);

  useEffect(() => { document.title = 'OS Update Simulator — Zozimus Technologies'; }, []);

  useEffect(() => {
    if (phase !== 'running' && phase !== 'done') return;
    const h = (e) => { if (e.key === 'Escape') exitSim(); };
    window.addEventListener('keydown', h);
    // Also exit sim if the browser leaves fullscreen on its own
    const fsChange = () => { if (!document.fullscreenElement) exitSim(); };
    document.addEventListener('fullscreenchange', fsChange);
    return () => {
      window.removeEventListener('keydown', h);
      document.removeEventListener('fullscreenchange', fsChange);
    };
  }, [phase]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); }, []);

  function exitSim() {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    setPhase('pick');
    setOs(null);
    setProgress(0);
    setAmount('');
    setUnit('minutes');
  }

  function selectOs(id) { setOs(id); setPhase('time'); }

  function startUpdate(e) {
    e.preventDefault();
    const val = parseFloat(amount);
    if (!val || val <= 0) return;
    durRef.current  = val * { seconds: 1000, minutes: 60000, hours: 3600000 }[unit];
    startRef.current = null;
    setProgress(0);
    setPhase('running');
    document.documentElement.requestFullscreen().catch(() => {});

    function tick(now) {
      if (!startRef.current) startRef.current = now;
      const pct = Math.min(100, ((now - startRef.current) / durRef.current) * 100);
      setProgress(Math.round(pct));
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setPhase('done');
      }
    }
    rafRef.current = requestAnimationFrame(tick);
  }

  const isFullscreen = phase === 'running' || phase === 'done';

  return (
    <>
      {isFullscreen && os === 'mac'     && <MacScreen     pct={progress} done={phase === 'done'} onExit={exitSim} />}
      {isFullscreen && os === 'windows' && <WindowsScreen pct={progress} done={phase === 'done'} onExit={exitSim} />}

      {!isFullscreen && (
        <div className="ossim-root">
          <Link className="ossim-back" to="/forfun/prank-screens">← All games</Link>
          <div className="ossim-window">

            {phase === 'pick' && (
              <div className="ossim-panel" key="pick">
                <p className="ossim-eyebrow">🖥️</p>
                <h1 className="ossim-title">OS Update Simulator</h1>
                <p className="ossim-sub">Pick an operating system to update</p>
                <div className="ossim-os-grid">
                  <button className="ossim-os-card" onClick={() => selectOs('mac')}>
                    <img src={appleTransparentImg} alt="Apple" className="ossim-os-apple-img" />
                    <span className="ossim-os-name">macOS Update</span>
                    <span className="ossim-os-ver">Sequoia 15.4</span>
                  </button>
                  <button className="ossim-os-card ossim-os-card-win" onClick={() => selectOs('windows')}>
                    <img src={msLogoImg} alt="Windows" className="ossim-os-win-img" />
                    <span className="ossim-os-name">Windows Update</span>
                    <span className="ossim-os-ver">Windows 11 24H2</span>
                  </button>
                </div>
              </div>
            )}

            {phase === 'time' && (
              <div className="ossim-panel" key="time">
                <button className="ossim-back-btn" onClick={() => setPhase('pick')}>← Back</button>
                {os === 'mac'
                  ? <img src={appleTransparentImg} alt="Apple" className="ossim-os-apple-img" />
                  : <img src={msLogoImg} alt="Windows" className="ossim-os-win-img" />
                }
                <h2 className="ossim-title">Set update duration</h2>
                <p className="ossim-sub">How long should the update screen run?</p>
                <form className="ossim-form" onSubmit={startUpdate}>
                  <div className="ossim-time-row">
                    <input
                      className="ossim-input"
                      type="number"
                      min="1"
                      max="999"
                      step="any"
                      placeholder="30"
                      value={amount}
                      onChange={e => setAmount(e.target.value)}
                      autoFocus
                    />
                    <select
                      className="ossim-select"
                      value={unit}
                      onChange={e => setUnit(e.target.value)}
                    >
                      {UNITS.map(u => (
                        <option key={u.value} value={u.value}>{u.label}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="ossim-btn"
                    disabled={!amount || parseFloat(amount) <= 0}
                  >
                    Start Update →
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}
