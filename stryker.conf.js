module.exports = function (config) {
  config.set({
    mutator: 'typescript',
    packageManager: 'npm',
    reporters: ['html', 'clear-text', 'progress'],
    testRunner: 'jest',
    transpilers: [],
    coverageAnalysis: 'off',
    tsconfigFile: 'tsconfig.json',
    mutate: ['src/**/*.ts', 'src/**/*.tsx'],
    jest: {
      projectType: 'custom',
      config: require('./jest.config.js'),
      enableFindRelatedTests: true,
    },
  });
};
