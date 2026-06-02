import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/forfun.css';

const PRANK_SCREENS = [
  {
    id: 'update-simulator',
    title: 'Update Simulator',
    description: 'Experience the full joy of a software update — including the stall at 99% and cryptic error messages.',
    emoji: '💿',
    to: '/forfun/update-simulator',
    tag: 'Simulation',
  },
  {
    id: 'os-update-simulator',
    title: 'OS Update Simulator',
    description: 'Pick macOS or Windows, set a duration, then suffer through a full-screen authentic update screen.',
    emoji: '🖥️',
    to: '/forfun/os-update-simulator',
    tag: 'Simulation',
  },
];

function GameCard({ title, description, emoji, to, tag }) {
  return (
    <Link className="forfun-game-card" to={to}>
      <div className="forfun-game-card-emoji">{emoji}</div>
      <div className="forfun-game-card-body">
        <span className="forfun-game-card-tag">{tag}</span>
        <h2 className="forfun-game-card-title">{title}</h2>
        <p className="forfun-game-card-desc">{description}</p>
      </div>
      <span className="forfun-game-card-play">Play →</span>
    </Link>
  );
}

export default function PrankScreens() {
  useEffect(() => { document.title = 'Prank Screens — Zozimus Technologies'; }, []);

  return (
    <main className="forfun-page">
      <header className="forfun-header">
        <div className="forfun-header-inner">
          <span className="forfun-logo-mark">🎭</span>
          <div>
            <h1 className="forfun-site-title">Prank Screens</h1>
            <p className="forfun-site-subtitle">Trick your friends with realistic fake update screens</p>
          </div>
        </div>
      </header>

      <section className="forfun-catalog">
        <Link className="forfun-back-link" to="/forfun">← All games</Link>
        <h2 className="forfun-catalog-heading">Choose a screen</h2>
        <div className="forfun-catalog-grid">
          {PRANK_SCREENS.map(item => (
            <GameCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}
