// export default {
// 	preset: 'ts-jest',
//   transform: {
//     '^.+\\.[tj]sx?$': 'babel-jest', // Usa babel-jest para transformar archivos .ts y .tsx
//   },
//   testEnvironment: 'node',        // Usa un entorno de node para las pruebas
//   moduleFileExtensions: ['ts', 'tsx', 'js'], // Extensiones de archivo reconocidas por jest
//   roots: ['<rootDir>/tests'],     // Carpeta raíz que contiene pruebas
//   testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignorar test en estos directorios
//   coverageDirectory: 'coverage', // Directorio de salida para reportes de coverage
// 	testMatch: [
//     '**/__tests__/**/*.test.ts',
//     '**/?(*.)+(spec|test).ts',
// 		'**/?(*.)+(spec|test).[tj]s?(x)'
//   ],
// 	moduleDirectories: ['node_modules', 'src'],
// 	moduleNameMapper: {
//     '^(\\.{1,2}/.*)\\.js$': '$1'
//   },
// };


// export default {
//   preset: 'ts-jest/presets/default-esm', // Usa el preset apropiado para soporte ESM
//   testEnvironment: 'node',
//   moduleNameMapper: {
//     '^(\\.{1,2}/.*)\\.js$': '$1' // Esto ayuda a resolver problemas con extensiones de archivo
//   },
//   transform: {
//     '^.+\\.(ts|tsx)$': 'ts-jest' // Usa ts-jest para transformar archivos .ts y .tsx
//   },
//   moduleDirectories: ['node_modules', 'src'],
//   extensionsToTreatAsEsm: ['.ts'], // Indica que los archivos .ts deben tratarse como módulos ESM
//   globals: {
//     'ts-jest': {
//       useESM: true // Indica a ts-jest que estamos usando módulos ESM
//     }
//   }
// };


// export default {
//   preset: 'ts-jest/presets/default-esm',
//   testEnvironment: 'node',
//   moduleNameMapper: {
//     '^(\\.{1,2}/.*)\\.js$': '$1'
//   },
//   transform: {
//     '^.+\\.(ts|tsx)$': ['ts-jest', {
//       useESM: true // Mueve la configuración de ts-jest aquí
//     }]
//   },
//   moduleDirectories: ['node_modules', 'src'],
//   extensionsToTreatAsEsm: ['.ts'],
// };


// export default {
//   preset: 'ts-jest/presets/default-esm',
//   testEnvironment: 'node',
//   moduleNameMapper: {
//     '^src/(.*)$': '<rootDir>/src/$1', // Asegúrate de que Jest traduzca las rutas de manera correcta
//   },
//   transform: {
//     '^.+\\.(ts|tsx)$': ['ts-jest', {
//       useESM: true
//     }]
//   },
//   moduleDirectories: ['node_modules', 'src'],
//   extensionsToTreatAsEsm: ['.ts']
// };


// export default {
//   preset: 'ts-jest/presets/default-esm',
//   testEnvironment: 'node',
//   moduleNameMapper: {
//     '^src/(.*)$': '<rootDir>/src/$1'
//   },
//   transform: {
//     '^.+\\.(ts|tsx)$': ['ts-jest', {
//       useESM: true
//     }]
//   },
//   moduleDirectories: ['node_modules', 'src'],
//   extensionsToTreatAsEsm: ['.ts'],
//   // Agregar o ajustar testMatch para incluir pruebas E2E
//   testMatch: [
//     '**/__tests__/**/*.test.ts',
//     '**/?(*.)+(spec|test).[tj]s?(x)',
//     '**/?(*.)+(e2e).[tj]s?(x)'  // Patrón para pruebas E2E
//   ],
//   testPathIgnorePatterns: ['/node_modules/', '/dist/'],
// };


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
