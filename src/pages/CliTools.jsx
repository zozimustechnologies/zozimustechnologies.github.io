import { useEffect } from 'react';
import TabBar from '../components/TabBar';
import useScrollReveal from '../hooks/useScrollReveal';
import '../styles/products.css';

export default function CliTools() {
  useEffect(() => { document.title = 'CLI Tools — Zozimus Technologies'; }, []);
  useScrollReveal();

  return (
    <>
      <header className="page-header">
        <h1>CLI Tools</h1>
        <p>Powerful command-line tools built for developers. Open source and free.</p>
      </header>

      <TabBar />

      <section className="products-section">

        {/* IconGen */}
        <div className="ext-detail reveal">
          <div className="ext-detail-inner">
            <div className="ext-detail-left">
              <div className="ext-detail-header">
                <div className="ext-detail-logo" style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', width: '48px', height: '48px', flexShrink: 0 }}>&#9881;</div>
                <div className="ext-detail-title">
                  <h2>IconGen</h2>
                  <span className="tag">CLI Tools</span>
                  <span className="coming-soon-badge">Coming Soon</span>
                </div>
              </div>
              <div className="ext-detail-body">
                <p>A command-line tool that converts a single source image into all the icon sizes and formats needed for browser extensions, macOS apps, and web apps. One command generates every size, saving manual resizing time.</p>
              </div>
              <div className="ext-detail-actions">
                <a href="https://github.com/zozimustechnologies/icongen" className="btn btn-outline" target="_blank" rel="noopener">View on GitHub</a>
              </div>
            </div>
            <div className="ext-detail-right">
              <div className="ext-features-grid">
                <div className="ext-feat">
                  <h4>&#9881; Install via Homebrew</h4>
                  <p><code>brew install icongen</code></p>
                </div>
                <div className="ext-feat">
                  <h4>&#128247; Browser Extension Icons</h4>
                  <p>Generates all sizes needed for Chrome, Edge, and Firefox extensions.</p>
                </div>
                <div className="ext-feat">
                  <h4>&#128187; macOS App Icons</h4>
                  <p>Outputs the full .iconset required for macOS app submissions.</p>
                </div>
                <div className="ext-feat">
                  <h4>&#127760; Web App Icons</h4>
                  <p>Favicon.ico, apple-touch-icon, and PWA icons in one pass.</p>
                </div>
                <div className="ext-feat">
                  <h4>&#129526; Single Command</h4>
                  <p>Run once with your source image and get every size automatically.</p>
                </div>
                <div className="ext-feat">
                  <h4>&#128274; Open Source</h4>
                  <p>MIT licensed. Audit it, fork it, or contribute on GitHub.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
