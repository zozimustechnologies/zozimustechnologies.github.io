import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer-full">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="nav-brand">
            <img
              src="https://avatars.githubusercontent.com/u/175112813?s=28&v=4"
              alt="Zozimus Technologies"
              width="28" height="28"
              style={{ borderRadius: '6px' }}
            />
            Zozimus Technologies
          </Link>
          <p>Building privacy-first products that are lightweight, open source, and free forever.</p>
        </div>

        <div className="footer-col">
          <h4>Products</h4>
          <a href="https://zozimustechnologies.github.io/siteblocker/" target="_blank" rel="noopener">Site Blocker</a>
          <a href="https://zozimustechnologies.github.io/qrcodegenerator/" target="_blank" rel="noopener">QR Code Generator</a>
          <a href="https://zozimustechnologies.github.io/ImageEditor/" target="_blank" rel="noopener">Image Editor</a>
          <a href="https://zozimustechnologies.github.io/pipcamera/" target="_blank" rel="noopener">PiP Camera</a>
          <a href="https://zozimustechnologies.github.io/the-qrcode-reader/" target="_blank" rel="noopener">QR Code Reader</a>
          <a href="https://zozimustechnologies.github.io/vocabbuilder/" target="_blank" rel="noopener">VocabBuilder</a>
          <Link to="/cli-tools">IconGen</Link>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/about">About</Link>
          <Link to="/privacy">Privacy</Link>
          <a href="https://wise.com/pay/business/sandeepchadda?utm_source=open_link" target="_blank" rel="noopener">Donate</a>
        </div>

        <div className="footer-col">
          <h4>Source Code</h4>
          <a href="https://github.com/zozimustechnologies/siteblocker" target="_blank" rel="noopener">Site Blocker</a>
          <a href="https://github.com/zozimustechnologies/qrcodegenerator" target="_blank" rel="noopener">QR Code Generator</a>
          <a href="https://github.com/zozimustechnologies/ImageEditor" target="_blank" rel="noopener">Image Editor</a>
          <a href="https://github.com/zozimustechnologies/pipcamera" target="_blank" rel="noopener">PiP Camera</a>
          <a href="https://github.com/zozimustechnologies/the-qrcode-reader" target="_blank" rel="noopener">QR Code Reader</a>
          <a href="https://github.com/zozimustechnologies/vocabbuilder" target="_blank" rel="noopener">VocabBuilder</a>
          <a href="https://github.com/zozimustechnologies/icongen" target="_blank" rel="noopener">IconGen</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Zozimus Technologies. All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://github.com/zozimustechnologies" target="_blank" rel="noopener" aria-label="GitHub">
            <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/zozimustechnologies" target="_blank" rel="noopener" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 011.47.957c.453.453.757.91.957 1.47.163.46.349 1.26.404 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.241 1.97-.404 2.43a4.088 4.088 0 01-.957 1.47 4.088 4.088 0 01-1.47.957c-.46.163-1.26.349-2.43.404-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.241-2.43-.404a4.088 4.088 0 01-1.47-.957 4.088 4.088 0 01-.957-1.47c-.163-.46-.349-1.26-.404-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.055-1.17.241-1.97.404-2.43a4.088 4.088 0 01.957-1.47A4.088 4.088 0 015.064 2.293c.46-.163 1.26-.349 2.43-.404C8.416 2.175 8.796 2.163 12 2.163zM12 0C8.741 0 8.333.014 7.053.072 5.775.131 4.902.333 4.14.63a5.882 5.882 0 00-2.126 1.384A5.882 5.882 0 00.63 4.14C.333 4.902.131 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.059 1.278.261 2.151.558 2.913a5.882 5.882 0 001.384 2.126 5.882 5.882 0 002.126 1.384c.762.297 1.635.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.059 2.151-.261 2.913-.558a5.882 5.882 0 002.126-1.384 5.882 5.882 0 001.384-2.126c.297-.762.499-1.635.558-2.913.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.059-1.278-.261-2.151-.558-2.913a5.882 5.882 0 00-1.384-2.126A5.882 5.882 0 0019.86.63C19.098.333 18.225.131 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
