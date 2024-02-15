module.exports = {
  preset: 'react-native',

  transformIgnorePatterns: [
    'node_modules/(?!react-native|@react-native|react-native-vector-icons|react-native-linear-gradient)/',
  ],
  testPathIgnorePatterns: ['/node_modules', '/android', '/ios'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.tsx',
    '__tests__/**/*.tsx',
    '!src/**/*.spec.tsx',
  ],
  coverageReporters: ['lcov'],
  automock: false,
  setupFiles: ['./__mocks__/fileMock.js'],
};
