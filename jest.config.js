module.exports = {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!**/node_modules/**", "!**/vendor/**"],
  coverageDirectory: "reports/coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "src/pages/_app.tsx", ".story.tsx"],
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
  setupFilesAfterEnv: ["./tests/setup-tests.ts"],
  preset: "ts-jest",
  testPathIgnorePatterns: ["/node_modules/", "/tests/e2e/"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  modulePathIgnorePatterns: ["<rootDir>/.*/__mocks__"],
  moduleNameMapper: {
    "~modules/(.*)": "<rootDir>/src/modules/$1",
    "src/(.*)": "<rootDir>/src/$1",
    "tests/(.*)": "<rootDir>/tests/$1",
  },
};
