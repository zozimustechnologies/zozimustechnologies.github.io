import { useLocation } from 'react-router-dom';

export default function TabBar() {
  const { hash } = useLocation();
  const active = hash || '#browser-extensions';
  const tabClass = (h) => `tab${active === h ? ' active' : ''}`;

  return (
    <div className="tab-bar">
      <a href="/products#browser-extensions" className={tabClass('#browser-extensions')}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
        </svg>
        Browser Extensions
      </a>
      <a href="/products#vscode-extensions" className={tabClass('#vscode-extensions')}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16.5 9.4L7.55 4.24a1 1 0 00-1 0L2 7v10l4.55 2.76a1 1 0 001 0L16.5 14.6" />
          <path d="M16.5 9.4v5.2M2 7l7 4.5M2 17l7-4.5M9 11.5V21" />
        </svg>
        VS Code Extensions
      </a>
      <a href="/products#cli-tools" className={tabClass('#cli-tools')}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
        </svg>
        CLI Tools
      </a>
    </div>
  );
}
