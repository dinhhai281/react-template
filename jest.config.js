const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  testPathIgnorePatterns: ['node_modules'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
    ...pathsToModuleNameMapper(compilerOptions.paths),
  },
  globals: {
    __PATH_PREFIX__: ``,
    __BASE_PATH__: ``,
  },
  testURL: 'http://localhost',
  coverageDirectory: './coverage',
  moduleDirectories: ['node_modules', '__dirname', 'src'],
};
