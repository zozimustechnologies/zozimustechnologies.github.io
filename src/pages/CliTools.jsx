import { useEffect } from 'react';
import TabBar from '../components/TabBar';
import useScrollReveal from '../hooks/useScrollReveal';
import cliTools from '../cliTools.json';
import '../styles/products.css';

export default function CliTools() {
  useEffect(() => { document.title = 'CLI Tools — Zozimus Technologies'; }, []);
  useScrollReveal();

  return (
    <>
      <header className="page-header">
        <h1>Our Products</h1>
        <p>Every product we build is open source, privacy-first, and completely free. No exceptions.</p>
      </header>

      <TabBar />

      <section className="products-section">
        {cliTools.map(tool => (
          <div key={tool.id} className="ext-detail reveal">
            <div className="ext-detail-inner">
              <div className="ext-detail-left">
                <div className="ext-detail-header">
                  {tool.logoType === 'emoji' ? (
                    <div className="ext-detail-logo" style={tool.logoStyle}>{tool.logoEmoji}</div>
                  ) : (
                    <img src={tool.logoImage.url} alt={tool.logoImage.alt} className="ext-detail-logo" width="48" height="48" />
                  )}
                  <div className="ext-detail-title">
                    <h2>{tool.name}</h2>
                    <span className="tag">{tool.tag}</span>
                    {tool.status === 'coming-soon' && <span className="coming-soon-badge">Coming Soon</span>}
                  </div>
                </div>
                <div className="ext-detail-body">
                  <p>{tool.longDescription}</p>
                </div>
                <div className="ext-detail-actions">
                  {tool.links.map(link => (
                    <a key={link.label} href={link.url} className={`btn btn-${link.variant}`} target="_blank" rel="noopener">{link.label}</a>
                  ))}
                </div>
              </div>
              <div className="ext-detail-right">
                <div className="ext-features-grid">
                  {tool.featureGrid.map(f => (
                    <div key={f.title} className="ext-feat">
                      <h4>{f.emoji} {f.title}</h4>
                      {f.code ? <p><code>{f.code}</code></p> : <p>{f.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
