import { useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../styles/privacy.css';

export default function Privacy() {
  useEffect(() => { document.title = 'Privacy — Zozimus Technologies'; }, []);
  useScrollReveal();

  return (
    <>
      <header className="page-header">
        <h1>Privacy</h1>
        <p>Our products don&rsquo;t collect your data. Here&rsquo;s exactly what that means &mdash; and what we do (and don&rsquo;t) collect on this website.</p>
      </header>

      <section className="section">

        <div className="tldr reveal">
          <h2>TL;DR</h2>
          <p>Our products run 100% locally with zero tracking. This <em>website</em> uses Google Analytics to measure aggregate, anonymous traffic &mdash; nothing more.</p>
          <div className="badge-row">
            <span className="badge">&#10003; Products: no data collection</span>
            <span className="badge">&#10003; No accounts</span>
            <span className="badge">&#10003; Products work offline</span>
            <span className="badge">&#10003; Open source</span>
            <span className="badge">&#9432; Website uses Google Analytics</span>
          </div>
        </div>

        <div className="commitment-grid reveal">
          <div className="commit-card">
            <span className="icon">&#128274;</span>
            <h3>100% Local Processing</h3>
            <p>All data stays in your browser&rsquo;s local storage. We never transmit anything to any server.</p>
          </div>
          <div className="commit-card">
            <span className="icon">&#128683;</span>
            <h3>Zero Tracking in Products</h3>
            <p>Our extensions and tools contain no analytics, telemetry, or beacons. They don&rsquo;t measure anything about you.</p>
          </div>
          <div className="commit-card">
            <span className="icon">&#128230;</span>
            <h3>No External Requests from Products</h3>
            <p>Our extensions make zero network requests. No CDNs, no APIs, no remote resources of any kind.</p>
          </div>
          <div className="commit-card">
            <span className="icon">&#128064;</span>
            <h3>Fully Auditable</h3>
            <p>All source code is unminified and public on GitHub. Read every line yourself.</p>
          </div>
        </div>

        <div className="comparison reveal">
          <h2>How we compare</h2>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Practice</th>
                <th>Zozimus</th>
                <th>Typical Extensions</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Products collect usage data</td><td className="check">Never</td><td className="cross">Often</td></tr>
              <tr><td>Requires account</td><td className="check">No</td><td className="cross">Usually</td></tr>
              <tr><td>Sends data to servers</td><td className="check">No servers</td><td className="cross">Yes</td></tr>
              <tr><td>Uses cookies</td><td className="check">Never</td><td className="cross">Frequently</td></tr>
              <tr><td>Open source</td><td className="check">Always</td><td className="cross">Rarely</td></tr>
              <tr><td>Works offline</td><td className="check">Fully</td><td className="cross">Partially</td></tr>
            </tbody>
          </table>
        </div>

        <div className="permissions reveal">
          <h2>Permissions explained</h2>
          <p>We only request what&rsquo;s strictly necessary. Here&rsquo;s why each permission exists:</p>
          <ul className="perm-list">
            <li>
              <strong>storage</strong>
              <span>Save your settings and data locally inside your browser. Never synced externally.</span>
            </li>
            <li>
              <strong>sidePanel</strong>
              <span>Display the extension interface in the browser&rsquo;s side panel.</span>
            </li>
            <li>
              <strong>declarativeNetRequest</strong>
              <span>Used by Site Blocker to block/redirect websites at the network level — handled entirely by the browser.</span>
            </li>
            <li>
              <strong>activeTab / all_urls</strong>
              <span>Apply blocking rules or scan page content. Only activated when you explicitly use the extension.</span>
            </li>
            <li>
              <strong>contextMenus</strong>
              <span>Used by Image Editor to add a right-click &ldquo;Edit image&rdquo; option on web pages.</span>
            </li>
          </ul>
        </div>

        <div className="prose reveal">
          <h2>What data do our products store?</h2>
          <p>Only what you explicitly create, and only in your browser&rsquo;s local storage:</p>
          <ul>
            <li>Your blocklist (Site Blocker) &mdash; the domains you choose to block</li>
            <li>Your settings &mdash; toggle states, preferences you configure</li>
            <li>Nothing else. No history, no profiles, no identifiers</li>
          </ul>
        </div>

        <div className="prose reveal">
          <h2>This website uses Google Analytics</h2>
          <p>To understand how many people visit our site and which products they&rsquo;re interested in, this website (zozimustechnologies.github.io) loads Google Analytics 4. This applies <strong>only to the website</strong> &mdash; not to any of our extensions, tools, or downloaded products.</p>
          <p><strong>What Google Analytics collects:</strong></p>
          <ul>
            <li>Anonymous, aggregated page views and session counts</li>
            <li>Approximate location (country / region), derived from IP &mdash; the IP itself is not stored by us</li>
            <li>Browser, device type, and operating system</li>
            <li>Referring website (how you got here)</li>
            <li>A Google-managed cookie used to distinguish unique sessions</li>
          </ul>
          <p><strong>What we do <em>not</em> do:</strong></p>
          <ul>
            <li>We do not collect names, emails, or any personally identifying information</li>
            <li>We do not sell or share data with advertisers</li>
            <li>We do not run ads or use remarketing</li>
            <li>We have IP anonymization enabled by default (GA4 standard behavior)</li>
          </ul>
          <p><strong>How to opt out:</strong></p>
          <ul>
            <li>Use a browser with tracking protection (Brave, Firefox strict mode, Safari)</li>
            <li>Install the official <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics Opt-out Browser Add-on</a></li>
            <li>Block analytics with uBlock Origin or a similar extension &mdash; the site works perfectly without it</li>
            <li>Enable &ldquo;Do Not Track&rdquo; or Global Privacy Control in your browser</li>
          </ul>
          <p>Google&rsquo;s handling of this data is governed by the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy</a>.</p>
        </div>

        <div className="prose reveal">
          <h2>Changes to this policy</h2>
          <p>If we ever change our privacy practices, we&rsquo;ll update this page and note the changes in our GitHub commit history. Since our extensions are open source, any change is publicly auditable.</p>
          <p>Last updated: April 2026</p>
        </div>

        <div className="prose reveal">
          <h2>Verify it yourself</h2>
          <p>Don&rsquo;t take our word for it. Here&rsquo;s how you can confirm our privacy claims about our products:</p>
          <ul>
            <li>Read our source code on <a href="https://github.com/zozimustechnologies" target="_blank" rel="noopener">GitHub</a></li>
            <li>Open DevTools Network tab while using an extension &mdash; you&rsquo;ll see zero outgoing requests</li>
            <li>Search the codebase for &ldquo;fetch&rdquo;, &ldquo;XMLHttpRequest&rdquo;, or any URL &mdash; you won&rsquo;t find external calls</li>
            <li>Check Application &rarr; Storage in DevTools to see exactly what&rsquo;s stored</li>
          </ul>
        </div>

      </section>
    </>
  );
}

