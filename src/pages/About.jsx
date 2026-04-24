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
          <p>Every line of code we write runs locally in your browser. We don&rsquo;t operate servers, collect analytics, or even know how many people use our extensions. And that&rsquo;s exactly how we like it.</p>
        </div>

        <div className="timeline reveal">
          <div className="timeline-item">
            <div className="date">2026</div>
            <h3>Image Editor launched</h3>
            <p>A full image editing toolkit in the browser sidebar — crop, resize, 16 filters, and 12 creative effects. Zero dependencies.</p>
          </div>
          <div className="timeline-item">
            <div className="date">2026</div>
            <h3>Site Blocker launched</h3>
            <p>Simple, reliable website blocking with child safety protection. Our first extension built on the principle of privacy by default.</p>
          </div>
          <div className="timeline-item">
            <div className="date">2026</div>
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


