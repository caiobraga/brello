module.exports = {
    transform: {},
    testMatch: ['**/src/**/*.test.mjs'],
    setupFiles: ['<rootDir>/setup.js'],
    testEnvironment: 'node',
    transform: {
        '^.+\\.m?js$': 'babel-jest',
      },
  };
  