// Shim replacing chrome://resources/js/load_time_data.js
// Provides mock loadTimeData for standalone (non-Chrome) use.

const strings: Record<string, string> = {
  dinoGameA11yAriaLabel: 'Dino Game',
  dinoGameA11yDescription: 'Press Space or tap to play the dinosaur game.',
  dinoGameA11yGameOver: 'Game over, your score is $1.',
  dinoGameA11yHighScore: 'Your highest score is $1.',
  dinoGameA11yJump: 'Jump to avoid obstacles.',
  dinoGameA11yStartGame: 'Game started.',
  dinoGameA11ySpeedToggle: 'Slow speed',
};

export const loadTimeData = {
  valueExists(key: string): boolean {
    // Return false for feature flags (disabledEasterEgg, enableAltGameMode,
    // altGameType) so the game runs in normal mode.
    return key in strings;
  },
  getValue(key: string): string {
    return strings[key] ?? '';
  },
  getString(key: string): string {
    return strings[key] ?? '';
  },
};
