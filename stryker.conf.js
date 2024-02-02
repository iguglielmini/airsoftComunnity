module.exports = {
  mutator: 'typescript',
  packageManager: 'npm',
  reporters: ['html', 'clear-text', 'progress'],
  transpilers: [],
  coverageAnalysis: 'off',
  tsconfigFile: 'tsconfig.json',
  mutate: ['src/**/*.ts', 'src/**/*.tsx'],
  jest: {
    projectType: 'custom',
    config: require('./jest.config.js'),
    enableFindRelatedTests: true,
  },
};
