export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^models/(.*)$': '<rootDir>/src/models/$1',
        '^config/(.*)$': '<rootDir>/src/config/$1',
        '^repositories/(.*)$': '<rootDir>/src/repositories/$1'
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testPathIgnorePatterns: [
        '<rootDir>/dist/',
        '<rootDir>/src/__tests__/sequelize.test.ts'
    ]
};
