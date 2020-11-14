expect.extend({
  toBeNull(received) {
    return {
      message: (): string => `expected ${received} to be null`,
      pass: received === null,
    };
  },
});

expect.extend({
  toBeSomeOf(received, ...matchers) {
    const pass = matchers.some((matcher) => matcher.asymmetricMatch(received));

    return {
      message: (): string => `expected ${received} to match at least one matcher`,
      pass,
    };
  },
});

export {};
