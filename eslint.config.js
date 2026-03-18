export default [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: "module"
      },
      globals: {
        fetch: true,
        require: true,
        Promise: true
      }
    },
    plugins: {},
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      eqeqeq: ["error", "smart"],
      curly: ["error", "all"]
    }
  }
];