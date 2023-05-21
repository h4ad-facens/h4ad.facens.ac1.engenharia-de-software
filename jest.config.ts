import type { Config } from 'jest';

const config: Config = {
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
  ],
  rootDir: '.',
  testRegex: [
    '.*\\.e2e-spec\\.ts$',
    '.*\\.spec\\.ts$',
  ],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  collectCoverageFrom: [
    'src/**/*.(t|j)s',
    'libs/**/*.(t|j)s',
  ],
  coverageReporters: [
    'html',
    'json-summary',
    'text',
    'text-summary'
  ],
  reporters: ['default', ['jest-junit', { outputDirectory: 'coverage' }]],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  roots: [
    '<rootDir>/src/',
    '<rootDir>/test/',
  ],
};

export default config;
