module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  // testMatch: [
  //   '**/__tests__/**/*.(spec|test).tsx?',
  //   '**/?(*.)+(spec|test).tsx?',
  // ],
  transformIgnorePatterns: [
    'node_modules/(?!react-native|@react-native|react-native-vector-icons|react-native-linear-gradient)/',
  ],
  testPathIgnorePatterns: ['/node_modules', '/android', '/ios'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.tsx',
    '__tests__/**/*.tsx',
    '!src/**/*.spec.tsx',
  ],
  coverageReporters: ['lcov'],
  automock: false,
  setupFiles: [
    './__mocks__/fileMock.js', // caminho para o arquivo de configuração do Jest
  ],
};
