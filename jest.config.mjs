export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@models/(.*)$': '<rootDir>/src/models/$1',
        '^@config/(.*)$': '<rootDir>/src/config/$1'
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testPathIgnorePatterns: [
        '<rootDir>/dist/'
    ]
};
