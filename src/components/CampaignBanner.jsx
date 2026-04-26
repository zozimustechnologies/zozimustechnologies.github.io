import { useState, useEffect, useRef } from 'react';

export default function CampaignBanner() {
  const [visible, setVisible] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    if (!visible) {
      document.body.classList.remove('banner-visible');
      document.documentElement.style.setProperty('--banner-height', '0px');
      return;
    }
    document.body.classList.add('banner-visible');
    const measure = () => {
      if (ref.current) {
        document.documentElement.style.setProperty('--banner-height', ref.current.offsetHeight + 'px');
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('resize', measure);
      document.body.classList.remove('banner-visible');
      document.documentElement.style.setProperty('--banner-height', '0px');
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="campaign-banner" ref={ref}>
      <span className="banner-icon">&#9995;</span>
      <span className="banner-text">
        <strong>India has no anti-bullying law.</strong> Only a guideline. A <span className="banner-highlight">13-year-old</span> is petitioning Indian Parliament to change that.
      </span>
      <a href="https://standup-petition.vercel.app/" className="banner-cta" target="_blank" rel="noopener">
        Sign the Petition &rarr;
      </a>
      <button className="banner-close" onClick={() => setVisible(false)} aria-label="Close banner">&times;</button>
    </div>
  );
}
