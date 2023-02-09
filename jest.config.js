module.exports = {
  preset: "jest-preset-angular",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
      diagnostics: false,
    },
  },
  globalSetup: 'jest-preset-angular/global-setup',
  setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "@env/(.*)": "<rootDir>/src/environments/$1",
  },
};
