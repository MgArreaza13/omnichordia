export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true }]
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  },
  moduleDirectories: ['node_modules', 'src'],
  extensionsToTreatAsEsm: ['.ts'],
  testMatch: [
    '**/__tests__/**/*.test.ts',
    '**/?(*.)+(spec|test).[tj]s?(x)',
    '**/steps/**/*.steps.ts'  // Asegúrate de que solo procesemos los archivos de steps
  ],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
