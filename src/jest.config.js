const nextJest = require('next/jest');
 
const createJestConfig = nextJest({
  dir: './',
})
 
// Add any custom config to be passed to Jest
//  @type {import('jest').Config} 

const customJestConfig = {

  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  // transform: {
  //   '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', 
  // },
  preset: 'ts-jest',
  modulePathIgnorePatterns: ['node-modules' , 'jest-test-results.json']
}
 
module.exports =  createJestConfig(customJestConfig)