// CLI Tools data source.
// Add an entry here and it will automatically appear on the CLI Tools page.
//
// Schema for each entry:
// {
//   id:              unique string key
//   name:            display name
//   tag:             category label (e.g. "CLI Tools")
//   status:          "available" | "coming-soon"
//   logoType:        "image" | "emoji"
//   logoImage:       { url, alt }                  — used when logoType === "image"
//   logoEmoji:       string                         — used when logoType === "emoji"
//   logoStyle:       React CSSProperties object     — used when logoType === "emoji"
//   description:     short paragraph
//   longDescription: full paragraph for detail view
//   featureGrid:     { emoji, title, description?, code? }[]  — use code for <code> snippets
//   links:           { label, url, variant: "primary"|"outline" }[]
// }

const cliTools = [
  {
    id: 'icongen',
    name: 'IconGen',
    tag: 'CLI Tools',
    status: 'coming-soon',
    logoType: 'emoji',
    logoEmoji: '⚙',
    logoStyle: {
      background: 'linear-gradient(135deg,#7c3aed,#4f46e5)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      width: '48px',
      height: '48px',
      flexShrink: 0,
    },
    description: 'A command-line tool that converts a single source image into all the icon sizes and formats needed for browser extensions, macOS apps, and web apps.',
    longDescription: 'A command-line tool that converts a single source image into all the icon sizes and formats needed for browser extensions, macOS apps, and web apps. One command generates every size, saving manual resizing time.',
    featureGrid: [
      { emoji: '⚙', title: 'Install via Homebrew', code: 'brew install icongen' },
      { emoji: '📷', title: 'Browser Extension Icons', description: 'Generates all sizes needed for Chrome, Edge, and Firefox extensions.' },
      { emoji: '💻', title: 'macOS App Icons', description: 'Outputs the full .iconset required for macOS app submissions.' },
      { emoji: '🌐', title: 'Web App Icons', description: 'Favicon.ico, apple-touch-icon, and PWA icons in one pass.' },
      { emoji: '🧶', title: 'Single Command', description: 'Run once with your source image and get every size automatically.' },
      { emoji: '🔒', title: 'Open Source', description: 'MIT licensed. Audit it, fork it, or contribute on GitHub.' },
    ],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/zozimustechnologies/icongen', variant: 'outline' },
    ],
  },
];

export default cliTools;
