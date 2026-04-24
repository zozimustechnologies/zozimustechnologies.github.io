import { useEffect } from 'react';
import TabBar from '../components/TabBar';
import useScrollReveal from '../hooks/useScrollReveal';
import '../styles/products.css';

export default function Products() {
  useEffect(() => { document.title = 'Products — Zozimus Technologies'; }, []);
  useScrollReveal();

  return (
    <>
      <header className="page-header">
        <h1>Our Products</h1>
        <p>Every product we build is open source, privacy-first, and completely free. No exceptions.</p>
      </header>

      <TabBar />

      <section className="products-section">

        {/* Site Blocker */}
        <div className="ext-detail reveal">
          <div className="ext-detail-inner">
            <div className="ext-detail-left">
              <div className="ext-detail-header">
                <img src="https://raw.githubusercontent.com/zozimustechnologies/siteblocker/main/store-assets/icon-300x300.png" alt="Site Blocker logo" className="ext-detail-logo" width="48" height="48" />
                <div className="ext-detail-title">
                  <h2>Site Blocker</h2>
                  <span className="tag">Productivity</span>
                </div>
              </div>
              <div className="ext-detail-body">
                <p>Take control of your browsing. Block up to 100 distracting websites with a clean side panel interface. Includes individual toggle controls per site, a master switch, subdomain blocking, and an optional math-challenge gate that prevents children from modifying the blocklist.</p>
                <img src="https://raw.githubusercontent.com/zozimustechnologies/siteblocker/main/store-assets/promo-1400x560.png" alt="Site Blocker banner" className="ext-detail-banner" width="1400" height="560" />
              </div>
              <div className="ext-detail-actions">
                <a href="https://zozimustechnologies.github.io/siteblocker/" className="btn btn-primary" target="_blank" rel="noopener">Learn More</a>
                <a href="https://microsoftedge.microsoft.com/addons/detail/site-blocker/lkcklabdlogcdcmbddiffonafahgagmm" className="btn btn-outline" target="_blank" rel="noopener">Download from Edge</a>
                <a href="https://github.com/zozimustechnologies/siteblocker/issues" className="btn btn-outline" target="_blank" rel="noopener">File a Bug</a>
              </div>
            </div>
            <div className="ext-detail-right">
              <div className="ext-features-grid">
                <div className="ext-feat"><h4>&#128737; Block 100 Sites</h4><p>Add any domain and it&rsquo;s blocked immediately across all subdomains.</p></div>
                <div className="ext-feat"><h4>&#128260; Individual Toggles</h4><p>Pause blocking per site without removing it from your list.</p></div>
                <div className="ext-feat"><h4>&#9889; Master Switch</h4><p>Turn all blocking on/off with one click. Your list is preserved.</p></div>
                <div className="ext-feat"><h4>&#128274; Child Safety</h4><p>Math question gate prevents kids from modifying settings.</p></div>
                <div className="ext-feat"><h4>&#127760; Subdomain Blocking</h4><p>Block facebook.com and all variants are blocked too.</p></div>
                <div className="ext-feat"><h4>&#127919; Side Panel UI</h4><p>Modern interface in the browser sidebar. No popups.</p></div>
              </div>
              <div className="ext-screenshots">
                <img src="https://raw.githubusercontent.com/zozimustechnologies/siteblocker/main/store-assets/screenshot-1-overview.png" alt="Site Blocker overview" loading="lazy" width="1280" height="800" />
                <img src="https://raw.githubusercontent.com/zozimustechnologies/siteblocker/main/store-assets/screenshot-5-features.png" alt="Site Blocker math challenge" loading="lazy" width="1280" height="800" />
              </div>
            </div>
          </div>
        </div>

        {/* QR Code Generator */}
        <div className="ext-detail reveal">
          <div className="ext-detail-inner">
            <div className="ext-detail-left">
              <div className="ext-detail-header">
                <img src="https://raw.githubusercontent.com/zozimustechnologies/qrcodegenerator/main/images/icon.png" alt="QR Code Generator logo" className="ext-detail-logo" width="48" height="48" />
                <div className="ext-detail-title">
                  <h2>QR Code Generator</h2>
                  <span className="tag">Productivity</span>
                </div>
              </div>
              <div className="ext-detail-body">
                <p>Generate QR codes instantly for any URL or text, right from your browser sidebar. A simple, lightweight side panel extension — no sign-up, no external scripts, just fast QR code generation.</p>
                <img src="https://raw.githubusercontent.com/zozimustechnologies/qrcodegenerator/main/extension/screenshots/screenshot-1280x800.png" alt="QR Code Generator banner" className="ext-detail-banner" width="1280" height="800" />
              </div>
              <div className="ext-detail-actions">
                <a href="https://zozimustechnologies.github.io/qrcodegenerator/" className="btn btn-primary" target="_blank" rel="noopener">Learn More</a>
                <a href="https://the-qrcode-generator.netlify.app/" className="btn btn-outline" target="_blank" rel="noopener">Open App</a>
                <a href="https://microsoftedge.microsoft.com/addons/detail/qr-code-generator/kcjdgoccjamenahcmpipbdcfkpnknami" className="btn btn-outline" target="_blank" rel="noopener">Download from Edge</a>
                <a href="https://github.com/zozimustechnologies/qrcodegenerator/issues" className="btn btn-outline" target="_blank" rel="noopener">File a Bug</a>
              </div>
            </div>
            <div className="ext-detail-right">
              <div className="ext-features-grid">
                <div className="ext-feat"><h4>&#9889; Instant Generation</h4><p>Enter any URL or text and get a scannable QR code in seconds.</p></div>
                <div className="ext-feat"><h4>&#128193; Side Panel UI</h4><p>Opens in the browser sidebar without leaving your current tab.</p></div>
                <div className="ext-feat"><h4>&#127912; Clean Design</h4><p>Distraction-free card layout with a polished blue theme.</p></div>
                <div className="ext-feat"><h4>&#128241; Responsive</h4><p>Works beautifully on any screen size. Scan with any mobile device.</p></div>
                <div className="ext-feat"><h4>&#129526; Lightweight</h4><p>Pure HTML, CSS, and vanilla JS. No frameworks, no bloat.</p></div>
                <div className="ext-feat"><h4>&#128275; No Sign-Up</h4><p>Works right away. No account, no login, no setup needed.</p></div>
              </div>
              <div className="ext-screenshots">
                <img src="https://raw.githubusercontent.com/zozimustechnologies/qrcodegenerator/main/extension/screenshots/screenshot-440x280.png" alt="QR Code Generator promo tile" loading="lazy" width="440" height="280" />
              </div>
            </div>
          </div>
        </div>

        {/* Image Editor */}
        <div className="ext-detail reveal">
          <div className="ext-detail-inner">
            <div className="ext-detail-left">
              <div className="ext-detail-header">
                <img src="https://raw.githubusercontent.com/zozimustechnologies/ImageEditor/main/storeassets/extensionlogo.png" alt="Image Editor logo" className="ext-detail-logo" width="48" height="48" />
                <div className="ext-detail-title">
                  <h2>Image Editor</h2>
                  <span className="tag">Creative</span>
                  <span className="coming-soon-badge">Coming Soon</span>
                </div>
              </div>
              <div className="ext-detail-body">
                <p>A lightweight, privacy-first image editor that lives in your browser&rsquo;s side panel. Crop, resize, apply 8 filter sliders, 8 one-click presets, and 12 unique creative pixel-manipulation effects — all without leaving your current tab.</p>
                <img src="https://raw.githubusercontent.com/zozimustechnologies/ImageEditor/main/storeassets/largepromotionaltile.png" alt="Image Editor banner" className="ext-detail-banner" width="1400" height="560" />
              </div>
              <div className="ext-detail-actions">
                <a href="https://zozimustechnologies.github.io/ImageEditor/" className="btn btn-primary" target="_blank" rel="noopener">Learn More</a>
                <a href="https://github.com/zozimustechnologies/ImageEditor/issues" className="btn btn-outline" target="_blank" rel="noopener">File a Bug</a>
              </div>
            </div>
            <div className="ext-detail-right">
              <div className="ext-features-grid">
                <div className="ext-feat"><h4>&#9986; Crop</h4><p>Drag handles with 5 aspect ratio presets and pixel input.</p></div>
                <div className="ext-feat"><h4>&#8596; Resize</h4><p>Scale by dimension or percentage with locked aspect ratio.</p></div>
                <div className="ext-feat"><h4>&#127912; 16 Filters</h4><p>8 adjustable sliders plus 8 one-click presets.</p></div>
                <div className="ext-feat"><h4>&#10024; 12 Creative Effects</h4><p>Memory Drift, Signal Corruption, Time Slice, and more.</p></div>
                <div className="ext-feat"><h4>&#128190; Multi-format Export</h4><p>Save as PNG, JPEG, or WebP with quality control.</p></div>
                <div className="ext-feat"><h4>&#127760; Page Image Detection</h4><p>Scan and edit any image on the current page.</p></div>
              </div>
              <div className="ext-screenshots">
                <img src="https://raw.githubusercontent.com/zozimustechnologies/ImageEditor/main/storeassets/screenshot-1280x800.png" alt="Image Editor full view" loading="lazy" width="1280" height="800" />
                <img src="https://raw.githubusercontent.com/zozimustechnologies/ImageEditor/main/storeassets/screenshot-640x400.png" alt="Image Editor compact view" loading="lazy" width="640" height="400" />
              </div>
            </div>
          </div>
        </div>

        {/* QR Code Reader */}
        <div className="ext-detail reveal">
          <div className="ext-detail-inner">
            <div className="ext-detail-left">
              <div className="ext-detail-header">
                <img src="https://raw.githubusercontent.com/zozimustechnologies/the-qrcode-reader/main/storeassets/extensionlogo-300x300.png" alt="QR Code Reader logo" className="ext-detail-logo" width="48" height="48" />
                <div className="ext-detail-title">
                  <h2>QR Code Reader</h2>
                  <span className="tag">Productivity</span>
                  <span className="coming-soon-badge">Coming Soon</span>
                </div>
              </div>
              <div className="ext-detail-body">
                <p>A fast, private QR code scanner available as a browser extension and web app. Point your webcam at any QR code for instant decoding, or upload a screenshot. All processing happens locally — no data is collected or transmitted.</p>
                <img src="https://raw.githubusercontent.com/zozimustechnologies/the-qrcode-reader/main/storeassets/largepromotionaltile-1400x560.png" alt="QR Code Reader banner" className="ext-detail-banner" width="1400" height="560" />
              </div>
              <div className="ext-detail-actions">
                <a href="https://zozimustechnologies.github.io/the-qrcode-reader/" className="btn btn-primary" target="_blank" rel="noopener">Learn More</a>
                <a href="https://the-qrcode-reader.netlify.app/" className="btn btn-outline" target="_blank" rel="noopener">Open App</a>
                <a href="https://github.com/zozimustechnologies/the-qrcode-reader/issues" className="btn btn-outline" target="_blank" rel="noopener">File a Bug</a>
              </div>
            </div>
            <div className="ext-detail-right">
              <div className="ext-features-grid">
                <div className="ext-feat"><h4>&#128247; Camera Scanning</h4><p>Point your webcam at any QR code for instant decoding.</p></div>
                <div className="ext-feat"><h4>&#128193; Image File Scanning</h4><p>Upload a screenshot or photo containing a QR code.</p></div>
                <div className="ext-feat"><h4>&#128274; 100% Private</h4><p>All processing happens locally in your browser. No data sent.</p></div>
                <div className="ext-feat"><h4>&#127912; Clean Modern UI</h4><p>Gradient-themed design with smooth animations.</p></div>
                <div className="ext-feat"><h4>&#129526; Lightweight</h4><p>No background processes. Only runs when you open it.</p></div>
                <div className="ext-feat"><h4>&#128275; Free &amp; Open Source</h4><p>MIT licensed, no ads, no premium tiers.</p></div>
              </div>
              <div className="ext-screenshots">
                <img src="https://raw.githubusercontent.com/zozimustechnologies/the-qrcode-reader/main/storeassets/screenshot-1280x800.png" alt="QR Code Reader overview" loading="lazy" width="1280" height="800" />
              </div>
            </div>
          </div>
        </div>

        {/* VocabBuilder */}
        <div className="ext-detail reveal">
          <div className="ext-detail-inner">
            <div className="ext-detail-left">
              <div className="ext-detail-header">
                <img src="https://raw.githubusercontent.com/zozimustechnologies/vocabbuilder/main/storeassets/extensionlogo.png" alt="VocabBuilder logo" className="ext-detail-logo" width="48" height="48" />
                <div className="ext-detail-title">
                  <h2>VocabBuilder</h2>
                  <span className="tag">Education</span>
                  <span className="coming-soon-badge">Coming Soon</span>
                </div>
              </div>
              <div className="ext-detail-body">
                <p>Master vocabulary through spaced repetition — right in your browser sidebar. VocabBuilder serves you one word per day and schedules reviews at progressive intervals (1→3→7→14→30 days) so words move from short-term to long-term memory efficiently.</p>
                <img src="https://raw.githubusercontent.com/zozimustechnologies/vocabbuilder/main/storeassets/largepromotionaltile.png" alt="VocabBuilder banner" className="ext-detail-banner" width="1400" height="560" />
              </div>
              <div className="ext-detail-actions">
                <a href="https://zozimustechnologies.github.io/vocabbuilder/" className="btn btn-primary" target="_blank" rel="noopener">Learn More</a>
                <a href="https://github.com/zozimustechnologies/vocabbuilder/issues" className="btn btn-outline" target="_blank" rel="noopener">File a Bug</a>
              </div>
            </div>
            <div className="ext-detail-right">
              <div className="ext-features-grid">
                <div className="ext-feat"><h4>&#128218; 4 Difficulty Levels</h4><p>Simple, Medium, Complex, and Competitive (GMAT/GRE/LSAT) word sets.</p></div>
                <div className="ext-feat"><h4>&#129504; Spaced Repetition</h4><p>Progressive 1→3→7→14→30 day review intervals for lasting retention.</p></div>
                <div className="ext-feat"><h4>&#128293; Streak &amp; Badges</h4><p>Daily streak counter with milestone badges at 3, 7, 30, and 365 days.</p></div>
                <div className="ext-feat"><h4>&#128276; Daily Reminders</h4><p>9 AM browser notification keeps vocabulary building a daily habit.</p></div>
                <div className="ext-feat"><h4>&#128202; Progress Dashboard</h4><p>Track streaks, words learned, daily goal, and monthly totals.</p></div>
                <div className="ext-feat"><h4>&#128274; 100% Local</h4><p>All data in Chrome Storage API — no accounts, no tracking, no cloud.</p></div>
              </div>
              <div className="ext-screenshots">
                <img src="https://raw.githubusercontent.com/zozimustechnologies/vocabbuilder/main/storeassets/screenshot-1280x800.png" alt="VocabBuilder full view" loading="lazy" width="1280" height="800" />
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
