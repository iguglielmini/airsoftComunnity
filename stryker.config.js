module.exports = {
  testRunner: 'jest',
  mutator: 'typescript', // ou "typescript" se você estiver usando TypeScript
  packageManager: 'yarn',
  reporters: ['html', 'clear-text', 'progress'],
  jest: {
    projectType: 'custom',
    config: require('./jest.config.js'), // Caminho para o seu arquivo de configuração do Jest
    enableFindRelatedTests: true,
  },
  tsconfigFile: 'tsconfig.json',
  coverageAnalysis: 'off',
  mutate: ['src/**/*.ts', 'src/**/*.tsx'], // Especifique os arquivos a serem mutados
  // Outras configurações do Stryker...
};
