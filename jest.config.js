module.exports = {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!**/node_modules/**", "!**/vendor/**"],
  coverageDirectory: "reports/coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "src/components/examples"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      statements: 0,
      lines: 0,
    },
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json",
    },
    statements: 0,
    branches: 0,
    functions: 0,
    lines: 0,
  },
  preset: "ts-jest",
  testPathIgnorePatterns: ["/node_modules/", "/tests/e2e/"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
