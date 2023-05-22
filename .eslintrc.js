module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ['standard-with-typescript', 'prettier'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: "module",
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
  }
}
