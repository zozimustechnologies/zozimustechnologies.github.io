import { useEffect } from 'react';
import TabBar from '../components/TabBar';
import useScrollReveal from '../hooks/useScrollReveal';
import extensions from '../extensions.json';
import '../styles/products.css';

function ExtCard({ e }) {
  return (
    <div className="ext-detail reveal">
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
  );
}

export default function Products() {
  useEffect(() => { document.title = 'Products — Zozimus Technologies'; }, []);
  useScrollReveal();

  const sorted = [...extensions].sort((a, b) => {
    if (a.status === b.status) return 0;
    return a.status === 'available' ? -1 : 1;
  });

  const rows = [];
  const processed = new Set();
  for (const ext of sorted) {
    if (processed.has(ext.id)) continue;
    if (ext.group) {
      const pair = sorted.filter(e => e.group === ext.group);
      rows.push({ type: 'pair', items: pair });
      pair.forEach(e => processed.add(e.id));
    } else {
      rows.push({ type: 'single', items: [ext] });
      processed.add(ext.id);
    }
  }

  return (
    <>
      <header className="page-header">
        <h1>Our Products</h1>
        <p>Every product we build is open source, privacy-first, and completely free. No exceptions.</p>
      </header>

      <TabBar />

      <section className="products-section">
        {rows.map(row =>
          row.type === 'pair' ? (
            <div key={row.items.map(e => e.id).join('-')} className="ext-pair">
              {row.items.map(e => <ExtCard key={e.id} e={e} />)}
            </div>
          ) : (
            <ExtCard key={row.items[0].id} e={row.items[0]} />
          )
        )}
      </section>
    </>
  );
}
