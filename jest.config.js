// jest.frontend.config.js
export default {
  // Set the environment to simulate a browser DOM
  testEnvironment: "jsdom",

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Collect coverage specifically for frontend code if desired
  collectCoverage: true,
  coverageDirectory: "coverage-frontend", // Keep frontend coverage separate

  // A list of paths to directories that Jest should use to search for files in
  // Point this to where your frontend code and tests reside
  roots: ["<rootDir>/"], // Adjust if your structure differs

  // Or use testMatch to be more specific about test file locations
  // testMatch: [
  //   "<rootDir>/src/public/**/?(*.)+(spec|test).[jt]s?(x)"
  // ],

  // You might need setup files for polyfills, testing-library setup etc.
  // setupFilesAfterEnv: ['<rootDir>/tests/frontend-setup.js'],

  verbose: true,
};
