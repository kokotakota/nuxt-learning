## プロジェクト作成
```
yarn create nuxt-app
```

## Vuetify導入
1. install
```
yarn add @nuxtjs/vuetify
```

2. nuxt.config.js
```
module.exports = {
  buildModules: ['@nuxtjs/vuetify']
}
```

## ソースディレクトリ設定
1. nuxt.config.js
```
export default {
  srcDir: 'src/',
  ...
}
```

2. pages, components, static, store, layouts  assets, plugins, middlewareをsrc配下に移動


## コンポーネント自動インポート設定
nuxt.config.js
```
module.exports = {
  components: [
    {
      path: '@/components/',
      pathPrefix: false
    }
  ],
}
```

## ESLint JavaScript Standard Style
1. インストール
```
yarn add --dev @babel/eslint-parser @nuxtjs/eslint-config @nuxtjs/eslint-module eslint eslint-loader eslint-plugin-standard eslint-plugin-nuxt eslint-plugin-vue eslint-plugin-import eslint-plugin-node eslint-plugin-promise
```

2. .eslintrc.js
```
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
  rules: {}
}
```

3. nuxt.config.js
export default {
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
}