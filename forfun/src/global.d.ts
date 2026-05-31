// Type declarations for Chrome-specific window properties referenced by the dino game.
// In standalone mode these are undefined; the game code guards all usages.
interface Window {
  errorPageController?: {
    trackEasterEgg(): void;
    updateEasterEggHighScore(score: number): void;
    resetEasterEggHighScore(): void;
  };
  initializeEasterEggHighScore?: (score: number) => void;
}
