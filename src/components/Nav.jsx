import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <Link to="/" className="nav-brand">
        <img
          src="https://avatars.githubusercontent.com/u/175112813?s=28&v=4"
          alt="Zozimus Technologies"
          width="28" height="28"
          style={{ borderRadius: '6px' }}
        />
        Zozimus Technologies
      </Link>

      <div className={`nav-links${open ? ' nav-open' : ''}`}>
        <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/products" onClick={() => setOpen(false)}>Products</NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
        <NavLink to="/privacy" onClick={() => setOpen(false)}>Privacy</NavLink>
        <a href="https://github.com/zozimustechnologies" target="_blank" rel="noopener">GitHub</a>
        <a href="https://www.instagram.com/zozimustechnologies" target="_blank" rel="noopener">Instagram</a>
        <a
          href="https://wise.com/pay/business/sandeepchadda?utm_source=open_link"
          className="nav-cta"
          target="_blank"
          rel="noopener"
        >
          &#9829; Donate
        </a>
      </div>

      <button className="nav-toggle" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </nav>
  );
}
