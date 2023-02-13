# app

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### npm run start 自動開啟視窗

```
"scripts": {
    "serve": "vue-cli-service serve --open"
  }

package.json
```

### eslint(關閉 eslint 效驗)

```
 lintOnSave: false

 vue.config.js
```

### 路由

- $route: 一般獲取路由信息(路徑、query、params 等)
- $router: 一般進行編程是導航進行路由跳轉( push||replace )
