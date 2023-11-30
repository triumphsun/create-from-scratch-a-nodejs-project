/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
    preset: 'ts-jest',
    coverageDirectory: 'coverage',
    roots: ['<rootDir>/src'],
    testEnvironment: 'node',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
}

module.exports = config
