import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SimpleFooter from './components/SimpleFooter';
import Home from './pages/Home';
import Products from './pages/Products';
import VscodeExtensions from './pages/VscodeExtensions';
import CliTools from './pages/CliTools';
import About from './pages/About';
import Privacy from './pages/Privacy';
import './styles/global.css';

import { useEffect } from 'react';

function ExternalRedirect({ to }) {
  useEffect(() => { window.location.replace(to); }, [to]);
  return null;
}

const ROUTES = [
  { path: '/', label: 'Home', aliases: ['home', 'index', 'main', 'start'] },
  { path: '/products', label: 'Products', aliases: ['product', 'extensions', 'extension', 'browser', 'apps', 'app'] },
  { path: '/vscode-extensions', label: 'VS Code Extensions', aliases: ['vscode', 'vscode-extension', 'vs-code', 'editor', 'ide'] },
  { path: '/cli-tools', label: 'CLI Tools', aliases: ['cli', 'cli-tool', 'terminal', 'command', 'icongen'] },
  { path: '/about', label: 'About', aliases: ['about-us', 'team', 'us', 'who'] },
  { path: '/privacy', label: 'Privacy Policy', aliases: ['privacy-policy', 'policy', 'data', 'gdpr'] },
];

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) => Array.from({ length: n + 1 }, (_, j) => i === 0 ? j : j === 0 ? i : 0));
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = a[i-1] === b[j-1] ? dp[i-1][j-1] : 1 + Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]);
  return dp[m][n];
}

function getSuggestion(pathname) {
  const typed = pathname.replace(/^\//, '').toLowerCase();
  if (!typed) return null;
  let best = null, bestScore = Infinity;
  for (const route of ROUTES) {
    const candidates = [route.path.replace(/^\//, '') || 'home', ...route.aliases];
    for (const c of candidates) {
      const score = levenshtein(typed, c);
      if (score < bestScore) { bestScore = score; best = route; }
    }
  }
  // Only suggest if reasonably close (within 40% of the longer string's length)
  const threshold = Math.max(3, Math.ceil(Math.max(typed.length, best?.path.length ?? 0) * 0.4));
  return bestScore <= threshold ? best : null;
}

function NotFound() {
  const { pathname } = useLocation();
  const suggestion = getSuggestion(pathname);

  return (
    <main style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 24px 60px' }}>
      <p style={{ fontSize: '5rem', fontWeight: 900, color: 'var(--accent-light)', lineHeight: 1 }}>404</p>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-bright)', margin: '16px 0 12px' }}>Page not found</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: suggestion ? '20px' : '32px' }}>
        <code style={{ background: 'var(--bg-elevated)', padding: '2px 8px', borderRadius: '6px', fontSize: '0.9em', color: 'var(--accent-light)' }}>{pathname}</code> doesn&rsquo;t exist.
      </p>
      {suggestion && (
        <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
          Did you mean&nbsp;
          <a href={suggestion.path} style={{ color: 'var(--accent-light)', fontWeight: 600 }}>{suggestion.label}</a>?
        </p>
      )}
      <a href="/" className="btn btn-primary">Go home</a>
    </main>
  );
}

function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/products" element={<Products />} />
        <Route path="/vscode-extensions" element={<VscodeExtensions />} />
        <Route path="/cli-tools" element={<CliTools />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {isHome ? <Footer /> : <SimpleFooter />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/github" element={<ExternalRedirect to="https://github.com/zozimustechnologies" />} />
        <Route path="/instagram" element={<ExternalRedirect to="https://www.instagram.com/zozimustechnologies" />} />
        <Route path="*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

