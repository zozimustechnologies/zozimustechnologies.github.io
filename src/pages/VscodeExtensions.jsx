import { useEffect } from 'react';
import TabBar from '../components/TabBar';
import useScrollReveal from '../hooks/useScrollReveal';
import '../styles/products.css';

export default function VscodeExtensions() {
  useEffect(() => { document.title = 'VS Code Extensions — Zozimus Technologies'; }, []);
  useScrollReveal();

  return (
    <>
      <header className="page-header">
        <h1>Our Products</h1>
        <p>Every product we build is open source, privacy-first, and completely free. No exceptions.</p>
      </header>

      <TabBar />

      <section className="products-section">
        <div className="empty-state reveal">
          <div className="empty-icon">&#128736;</div>
          <h2>VS Code Extensions</h2>
          <p>We&rsquo;re working on some exciting VS Code extensions. Check back soon.</p>
          <span className="coming-soon-badge" style={{ fontSize: '1rem', padding: '0.5rem 1.2rem', marginTop: '16px', display: 'inline-block' }}>Coming Soon</span>
        </div>
      </section>
    </>
  );
}
