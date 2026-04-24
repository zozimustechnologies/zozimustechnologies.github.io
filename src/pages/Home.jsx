import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import extensions from '../extensions.json';
import '../styles/home.css';

export default function Home() {
  useEffect(() => { document.title = 'Zozimus Technologies — Browser Extensions That Respect You'; }, []);
  useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-badge"><span className="dot" /> Open source &middot; Privacy first</div>
        <h1>Browser tools that<br /><span className="gradient-text">respect your privacy</span></h1>
        <p className="subtitle">We build lightweight, powerful products that run 100% locally. No tracking, no accounts, no data collection. Just tools that work.</p>
        <div className="hero-buttons">
          <Link to="/products" className="btn btn-primary">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
            Explore Products
          </Link>
          <a href="https://github.com/zozimustechnologies" className="btn btn-outline" target="_blank" rel="noopener">
            <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            View on GitHub
          </a>
          <a href="https://wise.com/pay/business/sandeepchadda?utm_source=open_link" className="btn btn-donate" target="_blank" rel="noopener">
            &#9829; Donate
          </a>
        </div>
      </section>

      {/* Products */}
      <section className="home-section">
        <div className="section-header reveal">
          <span className="section-label">Our Products</span>
          <h2>Built for people who value their privacy</h2>
          <p>Each extension is a standalone tool — no dependencies, no accounts, no cloud.</p>
        </div>

        <div className="ext-grid">
          {extensions.map(e => (
            <div key={e.id} className="ext-card reveal" onClick={() => window.open(e.cardUrl, '_blank')}>
              <div className="ext-card-image">
                <img src={e.bannerImage.url} alt={e.bannerImage.alt} width={e.bannerImage.width} height={e.bannerImage.height} />
              </div>
              <div className="ext-card-body">
                <div className="ext-card-top">
                  <img src={e.logoImage.url} alt={e.logoImage.alt} className="ext-card-logo" width="48" height="48" />
                  <div>
                    <h3>{e.name}</h3>
                    <span className="ext-tag">{e.tag}</span>
                    {e.status === 'coming-soon' && <span className="coming-soon-badge">Coming Soon</span>}
                  </div>
                </div>
                <p>{e.description}</p>
                <div className="ext-card-features">
                  {e.featurePills.map(f => <span key={f}>{f}</span>)}
                </div>
                <div className="ext-card-actions">
                  {e.links.map(link => (
                    <a key={link.label} href={link.url} className={`btn btn-${link.variant}`} target="_blank" rel="noopener" onClick={ev => ev.stopPropagation()}>{link.label}</a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <div className="stats reveal">
        <div className="stat"><div className="number">6</div><div className="label">Products</div></div>
        <div className="stat"><div className="number">100%</div><div className="label">Local Processing</div></div>
        <div className="stat"><div className="number">0</div><div className="label">Data Collected</div></div>
        <div className="stat"><div className="number">0</div><div className="label">External Dependencies</div></div>
      </div>

      {/* Values */}
      <section className="home-section">
        <div className="section-header reveal">
          <span className="section-label">Why Zozimus</span>
          <h2>What we believe in</h2>
          <p>Every decision we make starts with these principles.</p>
        </div>
        <div className="values-grid">
          <div className="value-card reveal">
            <div className="icon">&#128274;</div>
            <h3>Privacy by Default</h3>
            <p>We never collect, store, or transmit your data. Everything runs locally in your browser — period.</p>
          </div>
          <div className="value-card reveal">
            <div className="icon">&#9889;</div>
            <h3>Lightweight &amp; Fast</h3>
            <p>Pure HTML, CSS, and vanilla JS. No frameworks, no bloat, no build steps. Our extensions load instantly.</p>
          </div>
          <div className="value-card reveal">
            <div className="icon">&#128064;</div>
            <h3>Open Source</h3>
            <p>Every line of code is public on GitHub. Audit it, fork it, improve it — transparency is non-negotiable.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section reveal">
        <h2>Ready to take back control?</h2>
        <p>Install our extensions and experience tools that actually respect you.</p>
        <div className="cta-buttons">
          <Link to="/products" className="btn btn-outline">Browse Products</Link>
          <a href="https://wise.com/pay/business/sandeepchadda?utm_source=open_link" className="btn btn-donate" target="_blank" rel="noopener">&#9829; Support Our Work</a>
        </div>
      </section>
    </>
  );
}
