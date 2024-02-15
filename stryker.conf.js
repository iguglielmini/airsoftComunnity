module.exports = {
  mutate: ['src/**/*.ts', 'src/**/*.tsx'],
  mutator: 'typescript',
  packageManager: 'yarn', // Alterado para 'yarn'
  reporters: ['html', 'clear-text', 'progress'],
  testRunner: 'jest',
  coverageAnalysis: 'perTest',
  tsconfigFile: 'tsconfig.json',
  jest: {
    projectType: 'custom',
    config: require('./jest.config.js'),
    enableFindRelatedTests: true,
  },
};
