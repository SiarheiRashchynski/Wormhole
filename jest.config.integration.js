// integration tests
module.exports = {
    preset: 'ts-jest',
    globalSetup: './src/jest.global-setup.integration.ts',
    globalTeardown: './src/jest.global-teardown.integration.ts',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    testRegex: '/__tests__/.*\\.integration.test\\.ts$',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
