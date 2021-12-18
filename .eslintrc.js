module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    'standard',
    'plugin:vue/essential',
    '@nuxtjs'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "vue/multi-word-component-names": "off"
  }
}
