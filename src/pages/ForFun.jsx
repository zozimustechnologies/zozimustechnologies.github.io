import { useEffect } from 'react';
import '../styles/forfun.css';

export default function ForFun() {
  useEffect(() => { document.title = 'For Fun — Zozimus Technologies'; }, []);

  return (
    <main className="forfun-page">
      <div className="forfun-coming-soon">
        <span className="section-label">Mini Games</span>
        <h1>For <span className="gradient-text">Fun</span></h1>
        <p className="forfun-coming-soon-sub">Something fun is on the way. Check back soon.</p>
        <div className="forfun-coming-soon-badge">Coming Soon</div>
      </div>
    </main>
  );
}
