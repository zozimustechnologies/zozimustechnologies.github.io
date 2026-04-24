import { useEffect } from 'react';
import TabBar from '../components/TabBar';
import useScrollReveal from '../hooks/useScrollReveal';
import _vscodeExtensions from '../vscodeExtensions.json';
const vscodeExtensions = _vscodeExtensions.filter(e => !e._template);
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
        {vscodeExtensions.length === 0 ? (
          <div className="empty-state reveal">
            <div className="empty-icon">&#128736;</div>
            <h2>VS Code Extensions</h2>
            <p>We&rsquo;re working on some exciting VS Code extensions. Check back soon.</p>
            <span className="coming-soon-badge" style={{ fontSize: '1rem', padding: '0.5rem 1.2rem', marginTop: '16px', display: 'inline-block' }}>Coming Soon</span>
          </div>
        ) : vscodeExtensions.map(e => (
          <div key={e.id} className="ext-detail reveal">
            <div className="ext-detail-inner">
              <div className="ext-detail-left">
                <div className="ext-detail-header">
                  <img src={e.logoImage.url} alt={e.logoImage.alt} className="ext-detail-logo" width="48" height="48" />
                  <div className="ext-detail-title">
                    <h2>{e.name}</h2>
                    <span className="tag">{e.tag}</span>
                    {e.status === 'coming-soon' && <span className="coming-soon-badge">Coming Soon</span>}
                  </div>
                </div>
                <div className="ext-detail-body">
                  <p>{e.longDescription}</p>
                  <img src={e.bannerImage.url} alt={e.bannerImage.alt} className="ext-detail-banner" width={e.bannerImage.width} height={e.bannerImage.height} />
                </div>
                <div className="ext-detail-actions">
                  {e.links.map(link => (
                    <a key={link.label} href={link.url} className={`btn btn-${link.variant}`} target="_blank" rel="noopener">{link.label}</a>
                  ))}
                </div>
              </div>
              <div className="ext-detail-right">
                <div className="ext-features-grid">
                  {e.featureGrid.map(f => (
                    <div key={f.title} className="ext-feat">
                      <h4>{f.emoji} {f.title}</h4>
                      {f.code ? <p><code>{f.code}</code></p> : <p>{f.description}</p>}
                    </div>
                  ))}
                </div>
                {e.screenshots && e.screenshots.length > 0 && (
                  <div className="ext-screenshots">
                    {e.screenshots.map(s => (
                      <img key={s.url} src={s.url} alt={s.alt} loading="lazy" width={s.width} height={s.height} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
