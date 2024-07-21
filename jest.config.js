module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./__mocks__/setupTests.ts'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|expo|@expo|@unimodules)',
  ],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/svgMock.js',
  },
  testEnvironment: 'node',
};
