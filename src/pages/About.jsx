import { useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../styles/about.css';

export default function About() {
  useEffect(() => { document.title = 'About — Zozimus Technologies'; }, []);
  useScrollReveal();

  return (
    <>
      <header className="page-header">
        <h1>About Us</h1>
        <p>We&rsquo;re a small team that believes software should work for you, not against you.</p>
      </header>

      <section className="section">

        <div className="story reveal">
          <p><span className="highlight">Zozimus Technologies</span> started with a simple frustration: every browser extension we tried either harvested our data, locked features behind paywalls, or required an account just to block a website.</p>
          <p>So we decided to build our own. Extensions that are <span className="highlight">genuinely private</span>, <span className="highlight">completely free</span>, and <span className="highlight">open source</span>. No strings attached. No dark patterns. Just tools that do exactly what they promise.</p>
          <p>Every line of code we write runs locally in your browser. We don&rsquo;t operate servers or even know how many people use our extensions.</p>
        </div>

        <div className="timeline reveal">
          <div className="timeline-item">
            <div className="date">May 2026</div>
            <h3>Zen Tab — coming soon</h3>
            <p>A fast, distraction-free new tab page for Chrome and Edge. Live clock, smart greeting, weather, to-do list, notes, favourite tabs, and focus mode.</p>
          </div>
          <div className="timeline-item">
            <div className="date">May 2026</div>
            <h3>VocabBuilder — coming soon</h3>
            <p>Master vocabulary through spaced repetition right in your browser sidebar. Four difficulty levels including GMAT/GRE/LSAT words, streak tracking, and daily reminders.</p>
          </div>
          <div className="timeline-item">
            <div className="date">Apr 2026</div>
            <h3>Site Blocker <a href="https://zozimustechnologies.github.io/siteblocker-addon" target="_blank" rel="noopener">launched</a> on Edge</h3>
            <p>Simple, reliable website blocking with child safety protection. Block up to 100 sites with individual toggles, subdomain blocking, and a master switch.</p>
          </div>
          <div className="timeline-item">
            <div className="date">29 Apr 2026</div>
            <h3>Image Editor — coming soon</h3>
            <p>A full image editing toolkit in the browser sidebar — crop, resize, 16 filters, and 12 creative effects. Zero dependencies.</p>
          </div>
          <div className="timeline-item">
            <div className="date">25 Apr 2026</div>
            <h3>Browser Extension Validator <a href="https://zozimustechnologies.github.io/browserextensionvalidator-addon/" target="_blank" rel="noopener">launched</a> on Visual Studio Code</h3>
            <p>A VS Code extension that validates browser extension packages against Edge, Chrome, Firefox, and Safari store policies. 165+ policies, runs 100% locally inside VS Code.</p>
          </div>
          <div className="timeline-item">
            <div className="date">Apr 2026</div>
            <h3>PiP Camera <a href="https://zozimustechnologies.github.io/pipcamera-addon" target="_blank" rel="noopener">launched</a> on Edge</h3>
            <p>A tiny, always-on-top floating camera feed using the browser&rsquo;s native Picture-in-Picture API. Keep your webcam visible while browsing, presenting, or video chatting.</p>
          </div>
          <div className="timeline-item">
            <div className="date">Mar 2026</div>
            <h3>QR Code Reader <a href="https://zozimustechnologies.github.io/qrcodereader-addon" target="_blank" rel="noopener">launched</a> on Edge</h3>
            <p>A fast, private QR code scanner for Chrome and Edge. Scan via webcam or upload an image — all processing is local, no data transmitted.</p>
          </div>
          <div className="timeline-item">
            <div className="date">Jan 2026</div>
            <h3>QR Code Generator <a href="https://zozimustechnologies.github.io/qrcodegenerator-addon" target="_blank" rel="noopener">launched</a> on Edge</h3>
            <p>Generate QR codes instantly for any URL or text, right from your browser sidebar. Lightweight, fast, and privacy-friendly.</p>
          </div>
          <div className="timeline-item">
            <div className="date">Dec 2025</div>
            <h3>Zozimus Technologies founded</h3>
            <p>Born from the belief that useful software doesn&rsquo;t need to spy on its users. We started building tools we&rsquo;d actually want to use.</p>
          </div>
        </div>

        <div className="principles-grid reveal">
          <div className="principle">
            <span className="num">01</span>
            <h3>Privacy is a right, not a feature</h3>
            <p>We don&rsquo;t collect data. Not because regulations require it, but because we believe your browser is your personal space.</p>
          </div>
          <div className="principle">
            <span className="num">02</span>
            <h3>Simplicity over complexity</h3>
            <p>We use vanilla HTML, CSS, and JavaScript. No frameworks, no build tools, no dependencies. The result is faster, smaller, and more transparent code.</p>
          </div>
          <div className="principle">
            <span className="num">03</span>
            <h3>Free means free</h3>
            <p>No premium tiers, no subscriptions, no &ldquo;upgrade to unlock&rdquo; banners. Every feature is available to everyone, always.</p>
          </div>
          <div className="principle">
            <span className="num">04</span>
            <h3>Open by default</h3>
            <p>All our code is public on GitHub. We believe transparency builds trust — and trust is earned, not assumed.</p>
          </div>
        </div>

        <div className="reveal">
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-bright)', marginBottom: '20px', textAlign: 'center' }}>Our Stack</h2>
          <div className="tech-grid">
            <span className="tech-pill">HTML5</span>
            <span className="tech-pill">CSS3</span>
            <span className="tech-pill">Vanilla JavaScript</span>
            <span className="tech-pill">Canvas 2D API</span>
            <span className="tech-pill">Manifest V3</span>
            <span className="tech-pill">Side Panel API</span>
            <span className="tech-pill">DeclarativeNetRequest</span>
            <span className="tech-pill">Chrome Storage API</span>
          </div>
        </div>

        <div className="about-cta reveal">
          <h2>Want to support our work?</h2>
          <p>We keep everything free. If you find our tools useful, a small donation helps us keep going.</p>
          <div className="about-cta-buttons">
            <a href="https://wise.com/pay/business/sandeepchadda?utm_source=open_link" className="btn btn-donate" target="_blank" rel="noopener">&#9829; Donate via Wise</a>
            <a href="https://github.com/zozimustechnologies" className="btn btn-outline" target="_blank" rel="noopener">Star us on GitHub</a>
          </div>
        </div>

      </section>
    </>
  );
}


