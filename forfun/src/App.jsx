import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ReactionTest from './pages/ReactionTest'
import DinoGame from './pages/DinoGame'
import './App.css'

const GAMES = [
  {
    id: 'reaction-test',
    title: 'Reaction Test',
    description: 'How fast are your reflexes? Wait for the green light and click as fast as you can.',
    emoji: '⚡',
    to: '/reaction-test',
    tag: 'Reflex',
  },
  {
    id: 'dino-run',
    title: 'Dino Run',
    description: 'An endless side-scroller — jump over cacti and see how far you can go.',
    emoji: '🦕',
    to: '/dino',
    tag: 'Endless runner',
  },
]

function GameCard({ title, description, emoji, to, tag }) {
  return (
    <Link className="game-card" to={to}>
      <div className="game-card-emoji">{emoji}</div>
      <div className="game-card-body">
        <span className="game-card-tag">{tag}</span>
        <h2 className="game-card-title">{title}</h2>
        <p className="game-card-desc">{description}</p>
      </div>
      <span className="game-card-play">Play →</span>
    </Link>
  )
}

function Home() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="header-inner">
          <span className="logo-mark">🎮</span>
          <div>
            <h1 className="site-title">For Fun</h1>
            <p className="site-subtitle">A growing collection of games to kill time</p>
          </div>
        </div>
      </header>

      <main className="catalog">
        <h2 className="catalog-heading">Games</h2>
        <div className="catalog-grid">
          {GAMES.map(game => (
            <GameCard key={game.id} {...game} />
          ))}
          <div className="game-card coming-soon">
            <div className="game-card-emoji">🔒</div>
            <div className="game-card-body">
              <span className="game-card-tag">Coming soon</span>
              <h2 className="game-card-title">More games</h2>
              <p className="game-card-desc">New games are on the way. Check back later!</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <p>Made for fun · Zozimus Technologies</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter basename="/forfun">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reaction-test" element={<ReactionTest />} />
        <Route path="/dino" element={<DinoGame />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
