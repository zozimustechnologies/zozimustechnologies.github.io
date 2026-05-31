import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/forfun.css';

const GAMES = [
  {
    id: 'reaction-test',
    title: 'Reaction Test',
    description: 'How fast are your reflexes? Wait for the green light and click as fast as you can.',
    emoji: '⚡',
    to: '/forfun/reaction-test',
    tag: 'Reflex',
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

export default function ForFun() {
  useEffect(() => { document.title = 'For Fun — Zozimus Technologies'; }, []);

  return (
    <main className="forfun-page">
      <header className="forfun-header">
        <div className="forfun-header-inner">
          <span className="forfun-logo-mark">🎮</span>
          <div>
            <h1 className="forfun-site-title">For Fun</h1>
            <p className="forfun-site-subtitle">A growing collection of games to kill time</p>
          </div>
        </div>
      </header>

      <section className="forfun-catalog">
        <h2 className="forfun-catalog-heading">Games</h2>
        <div className="forfun-catalog-grid">
          {GAMES.map(game => (
            <GameCard key={game.id} {...game} />
          ))}
          <div className="forfun-game-card coming-soon">
            <div className="forfun-game-card-emoji">🔒</div>
            <div className="forfun-game-card-body">
              <span className="forfun-game-card-tag">Coming soon</span>
              <h2 className="forfun-game-card-title">More games</h2>
              <p className="forfun-game-card-desc">New games are on the way. Check back later!</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
