import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
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
          {/* Site Blocker */}
          <div className="ext-card reveal" onClick={() => window.open('https://zozimustechnologies.github.io/siteblocker/', '_blank')}>
            <div className="ext-card-image">
              <img src="https://raw.githubusercontent.com/zozimustechnologies/siteblocker/main/store-assets/promo-1400x560.png" alt="Site Blocker banner" width="1400" height="560" />
            </div>
            <div className="ext-card-body">
              <div className="ext-card-top">
                <img src="https://raw.githubusercontent.com/zozimustechnologies/siteblocker/main/store-assets/icon-300x300.png" alt="Site Blocker logo" className="ext-card-logo" width="48" height="48" />
                <div><h3>Site Blocker</h3><span className="ext-tag">Productivity</span></div>
              </div>
              <p>Block distracting websites and boost your productivity. Manage up to 100 sites with individual toggle controls and a math-challenge child safety gate.</p>
              <div className="ext-card-features">
                <span>100 site limit</span><span>Master switch</span><span>Child safety</span>
                <span>Subdomain blocking</span><span>Side panel UI</span>
              </div>
              <div className="ext-card-actions">
                <a href="https://zozimustechnologies.github.io/siteblocker/" className="btn btn-primary" target="_blank" rel="noopener">Learn More</a>
                <a href="https://microsoftedge.microsoft.com/addons/detail/site-blocker/lkcklabdlogcdcmbddiffonafahgagmm" className="btn btn-outline" target="_blank" rel="noopener">Download from Edge</a>
                <a href="https://github.com/zozimustechnologies/siteblocker" className="btn btn-outline" target="_blank" rel="noopener">GitHub</a>
              </div>
            </div>
          </div>

          {/* QR Code Generator */}
          <div className="ext-card reveal" onClick={() => window.open('https://zozimustechnologies.github.io/qrcodegenerator/', '_blank')}>
            <div className="ext-card-image">
              <img src="https://raw.githubusercontent.com/zozimustechnologies/qrcodegenerator/main/extension/screenshots/screenshot-1400x560.png" alt="QR Code Generator banner" width="1400" height="560" />
            </div>
            <div className="ext-card-body">
              <div className="ext-card-top">
                <img src="https://raw.githubusercontent.com/zozimustechnologies/qrcodegenerator/main/images/icon.png" alt="QR Code Generator logo" className="ext-card-logo" width="48" height="48" />
                <div><h3>QR Code Generator</h3><span className="ext-tag">Productivity</span></div>
              </div>
              <p>Generate QR codes instantly for any URL or text, right from your browser sidebar. Lightweight, fast, and privacy-friendly with a clean side panel UI.</p>
              <div className="ext-card-features">
                <span>Instant generation</span><span>Side panel UI</span><span>No sign-up</span>
                <span>Responsive</span><span>Zero dependencies</span>
              </div>
              <div className="ext-card-actions">
                <a href="https://zozimustechnologies.github.io/qrcodegenerator/" className="btn btn-primary" target="_blank" rel="noopener">Learn More</a>
                <a href="https://the-qrcode-generator.netlify.app/" className="btn btn-outline" target="_blank" rel="noopener">Open App</a>
                <a href="https://microsoftedge.microsoft.com/addons/detail/qr-code-generator/kcjdgoccjamenahcmpipbdcfkpnknami" className="btn btn-outline" target="_blank" rel="noopener">Download from Edge</a>
                <a href="https://github.com/zozimustechnologies/qrcodegenerator" className="btn btn-outline" target="_blank" rel="noopener">GitHub</a>
              </div>
            </div>
          </div>

          {/* Image Editor */}
          <div className="ext-card reveal" onClick={() => window.open('https://zozimustechnologies.github.io/ImageEditor/', '_blank')}>
            <div className="ext-card-image">
              <img src="https://raw.githubusercontent.com/zozimustechnologies/ImageEditor/main/storeassets/largepromotionaltile.png" alt="Image Editor banner" width="1400" height="560" />
            </div>
            <div className="ext-card-body">
              <div className="ext-card-top">
                <img src="https://raw.githubusercontent.com/zozimustechnologies/ImageEditor/main/storeassets/extensionlogo.png" alt="Image Editor logo" className="ext-card-logo" width="48" height="48" />
                <div>
                  <h3>Image Editor</h3>
                  <span className="ext-tag">Creative</span>
                  <span className="coming-soon-badge">Coming Soon</span>
                </div>
              </div>
              <p>A full image editing toolkit in your browser sidebar. Crop, resize, apply 8 filters, 8 presets, and 12 creative pixel-manipulation effects — all without leaving your tab.</p>
              <div className="ext-card-features">
                <span>Crop &amp; Resize</span><span>16 Filters</span><span>12 Creative Effects</span>
                <span>Export PNG/JPEG/WebP</span><span>Drag &amp; drop</span>
              </div>
              <div className="ext-card-actions">
                <a href="https://zozimustechnologies.github.io/ImageEditor/" className="btn btn-primary" target="_blank" rel="noopener">Learn More</a>
                <a href="https://github.com/zozimustechnologies/ImageEditor" className="btn btn-outline" target="_blank" rel="noopener">GitHub</a>
              </div>
            </div>
          </div>

          {/* PiP Camera */}
          <div className="ext-card reveal" onClick={() => window.open('https://zozimustechnologies.github.io/pipcamera/', '_blank')}>
            <div className="ext-card-image">
              <img src="https://raw.githubusercontent.com/zozimustechnologies/pipcamera/main/store-assets/largepromotionaltile.png" alt="PiP Camera banner" width="1400" height="560" />
            </div>
            <div className="ext-card-body">
              <div className="ext-card-top">
                <img src="https://raw.githubusercontent.com/zozimustechnologies/pipcamera/main/store-assets/extensionlogo.png" alt="PiP Camera logo" className="ext-card-logo" width="48" height="48" />
                <div>
                  <h3>PiP Camera</h3>
                  <span className="ext-tag">Productivity</span>
                  <span className="coming-soon-badge">Coming Soon</span>
                </div>
              </div>
              <p>A tiny, always-on-top camera feed that floats in the corner of your screen. Open your webcam in picture-in-picture mode while browsing, presenting, or video chatting.</p>
              <div className="ext-card-features">
                <span>Picture-in-Picture</span><span>One-click launch</span><span>Always on top</span>
                <span>Privacy focused</span><span>Lightweight</span>
              </div>
              <div className="ext-card-actions">
                <a href="https://zozimustechnologies.github.io/pipcamera/" className="btn btn-primary" target="_blank" rel="noopener">Learn More</a>
                <a href="https://github.com/zozimustechnologies/pipcamera" className="btn btn-outline" target="_blank" rel="noopener">GitHub</a>
              </div>
            </div>
          </div>

          {/* QR Code Reader */}
          <div className="ext-card reveal" onClick={() => window.open('https://the-qrcode-reader.netlify.app/', '_blank')}>
            <div className="ext-card-image">
              <img src="https://raw.githubusercontent.com/zozimustechnologies/the-qrcode-reader/main/storeassets/largepromotionaltile-1400x560.png" alt="QR Code Reader banner" width="1400" height="560" />
            </div>
            <div className="ext-card-body">
              <div className="ext-card-top">
                <img src="https://raw.githubusercontent.com/zozimustechnologies/the-qrcode-reader/main/storeassets/extensionlogo-300x300.png" alt="QR Code Reader logo" className="ext-card-logo" width="48" height="48" />
                <div>
                  <h3>QR Code Reader</h3>
                  <span className="ext-tag">Productivity</span>
                  <span className="coming-soon-badge">Coming Soon</span>
                </div>
              </div>
              <p>A fast, private QR code scanner. Point your webcam at any QR code for instant decoding, or upload a screenshot. 100% local processing — no data collected or transmitted.</p>
              <div className="ext-card-features">
                <span>Camera scanning</span><span>Image file scanning</span><span>100% private</span>
                <span>Clean modern UI</span><span>Lightweight</span>
              </div>
              <div className="ext-card-actions">
                <a href="https://zozimustechnologies.github.io/the-qrcode-reader/" className="btn btn-primary" target="_blank" rel="noopener">Learn More</a>
                <a href="https://the-qrcode-reader.netlify.app/" className="btn btn-outline" target="_blank" rel="noopener">Open App</a>
                <a href="https://github.com/zozimustechnologies/the-qrcode-reader" className="btn btn-outline" target="_blank" rel="noopener">GitHub</a>
              </div>
            </div>
          </div>

          {/* VocabBuilder */}
          <div className="ext-card reveal" onClick={() => window.open('https://zozimustechnologies.github.io/vocabbuilder/', '_blank')}>
            <div className="ext-card-image">
              <img src="https://raw.githubusercontent.com/zozimustechnologies/vocabbuilder/main/storeassets/largepromotionaltile.png" alt="VocabBuilder banner" width="1400" height="560" />
            </div>
            <div className="ext-card-body">
              <div className="ext-card-top">
                <img src="https://raw.githubusercontent.com/zozimustechnologies/vocabbuilder/main/storeassets/extensionlogo.png" alt="VocabBuilder logo" className="ext-card-logo" width="48" height="48" />
                <div>
                  <h3>VocabBuilder</h3>
                  <span className="ext-tag">Education</span>
                  <span className="coming-soon-badge">Coming Soon</span>
                </div>
              </div>
              <p>Master vocabulary through spaced repetition — right in your browser sidebar. Four difficulty levels including GMAT/GRE/LSAT words, streak tracking, and rich word cards with IPA pronunciation.</p>
              <div className="ext-card-features">
                <span>Spaced repetition</span><span>4 difficulty levels</span><span>Streak &amp; badges</span>
                <span>Daily reminders</span><span>100% local</span>
              </div>
              <div className="ext-card-actions">
                <a href="https://zozimustechnologies.github.io/vocabbuilder/" className="btn btn-primary" target="_blank" rel="noopener">Learn More</a>
                <a href="https://github.com/zozimustechnologies/vocabbuilder" className="btn btn-outline" target="_blank" rel="noopener">GitHub</a>
              </div>
            </div>
          </div>
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
