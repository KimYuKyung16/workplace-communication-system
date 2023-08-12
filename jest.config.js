module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest'], //ts, tsx 파일명일 경우 ts-jest 사용
    '^.+\\.(js|jsx)$': ['babel-jest'], //js, jsx 파일명일 경우 babel-jest 사용
  },
  testPathIgnorePatterns: [ '<rootDir>/node_modules/'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
};
