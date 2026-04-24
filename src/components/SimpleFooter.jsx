import { Link } from 'react-router-dom';

export default function SimpleFooter() {
  return (
    <footer className="site-footer">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/privacy">Privacy</Link>
        <a href="https://github.com/zozimustechnologies" target="_blank" rel="noopener">GitHub</a>
        <a href="https://www.instagram.com/zozimustechnologies" target="_blank" rel="noopener">Instagram</a>
        <a href="https://wise.com/pay/business/sandeepchadda?utm_source=open_link" target="_blank" rel="noopener">Donate</a>
      </div>
      <p>&copy; 2026 Zozimus Technologies. All rights reserved.</p>
    </footer>
  );
}
