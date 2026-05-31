// Copyright 2024 - Shim replacing chrome://resources/js/assert.js
// Provides a minimal assert() compatible with the Chromium dino game code.

export function assert<T>(
  value: T | null | undefined | false | 0 | '',
  message?: string,
): asserts value is T {
  if (!value) {
    throw new Error(message ?? 'Assertion failed');
  }
}
