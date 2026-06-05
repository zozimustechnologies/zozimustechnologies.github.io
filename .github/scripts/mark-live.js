#!/usr/bin/env node
/**
 * mark-live.js
 *
 * Marks a browser extension as available in extensions.json.
 *
 * Usage:
 *   node .github/scripts/mark-live.js <extension_id> [store_url] [store_label]
 *
 * Arguments:
 *   extension_id  — the "id" field in extensions.json  (required)
 *   store_url     — Edge/Chrome store URL to add to links  (optional)
 *   store_label   — button label, e.g. "Download from Edge"  (optional, default: "Download from Edge")
 */

const fs = require('fs');
const path = require('path');

const [,, extensionId, storeUrl, storeLabel = 'Download from Edge'] = process.argv;

if (!extensionId) {
  console.error('Error: extension_id is required.');
  process.exit(1);
}

const jsonPath = path.resolve(__dirname, '../../src/extensions.json');
const extensions = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const ext = extensions.find(e => e.id === extensionId);
if (!ext) {
  console.error(`Error: no extension with id "${extensionId}" found in extensions.json.`);
  process.exit(1);
}

// Flip status
ext.status = 'available';

// Remove launch date
delete ext.launchDate;

// Add store link if provided (avoid duplicates)
if (storeUrl) {
  const alreadyExists = ext.links.some(l => l.url === storeUrl);
  if (!alreadyExists) {
    // Insert after the primary "Learn More" button
    const insertAt = ext.links.findIndex(l => l.variant === 'primary') + 1;
    ext.links.splice(insertAt, 0, { label: storeLabel, url: storeUrl, variant: 'outline' });
  }
}

fs.writeFileSync(jsonPath, JSON.stringify(extensions, null, 2) + '\n');
console.log(`✓ "${ext.name}" marked as available.`);
if (storeUrl) console.log(`  Store link added: ${storeUrl}`);
