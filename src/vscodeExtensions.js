// VS Code Extensions data source.
// Add an entry here and it will automatically appear on the VS Code Extensions page.
//
// Schema for each entry:
// {
//   id:              unique string key
//   name:            display name
//   tag:             category label (e.g. "Productivity", "Themes")
//   status:          "available" | "coming-soon"
//   cardUrl:         URL the whole card links to
//   bannerImage:     { url, alt, width, height }
//   logoImage:       { url, alt }
//   description:     short paragraph shown in the card
//   longDescription: full paragraph shown in the detail view
//   featurePills:    string[]   — small pill tags
//   featureGrid:     { emoji, title, description }[]
//   links:           { label, url, variant: "primary"|"outline" }[]
//   screenshots:     { url, alt, width, height }[]
// }

const vscodeExtensions = [
  // No VS Code extensions yet — add entries here when ready.
  // Example:
  // {
  //   id: 'myextension',
  //   name: 'My Extension',
  //   tag: 'Productivity',
  //   status: 'coming-soon',
  //   cardUrl: 'https://marketplace.visualstudio.com/items?itemName=...',
  //   bannerImage: { url: 'https://...', alt: 'My Extension banner', width: 1400, height: 560 },
  //   logoImage: { url: 'https://...', alt: 'My Extension logo' },
  //   description: 'Short description.',
  //   longDescription: 'Full description.',
  //   featurePills: ['Feature 1', 'Feature 2'],
  //   featureGrid: [{ emoji: '⚡', title: 'Feature', description: 'Detail.' }],
  //   links: [{ label: 'Install', url: 'https://...', variant: 'primary' }],
  //   screenshots: [],
  // },
];

export default vscodeExtensions;
