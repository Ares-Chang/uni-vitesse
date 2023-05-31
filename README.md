<p align='center'>
  <img src='https://user-images.githubusercontent.com/36911513/229357982-0e03b4c3-780d-470a-9a42-070118a7366d.png' alt='Uni Vitesse - Opinionated Vite Starter Template' width='800'/>
</p>

<h6 align='center'>
<a href="https://uni-vitesse.netlify.app/">在线 Demo</a>
</h6>

<h5 align='center'>
<b>UniAPP 版的 <a href="https://github.com/antfu/vitesse-lite">Vitesse-lite</a></b>
</h5>

<br/>

<p align='center'>
<b>简体中文</b> | <a href="https://github.com/Ares-Chang/uni-vitesse/blob/master/README.en-US.md">English</a>
</p>

<br/>

环境配置 Copy From [Vitesse-lite](https://github.com/antfu/vitesse-lite), 力求一个开发体验良好的环境配置。

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - 就是快！

- 🗂 [基于文件的约定式路由](https://github.com/Ares-Chang/uni-vitesse/tree/master/src/pages)

- 📦 [组件自动化加载](https://github.com/Ares-Chang/uni-vitesse/blob/master/src/components)

- 📑 [布局系统](https://github.com/Ares-Chang/uni-vitesse/tree/master/src/layouts)

- 🍍 [使用 Pinia 的状态管理](https://pinia.vuejs.org)

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

- 😃 [各种图标集为你所用](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 🦾 TypeScript, 当然

- 🔒︎ [锁 pnpm 包管理](https://pnpm.io/only-allow-pnpm)

<br>

如无跨端需求, 更推荐 [Vitesse-lite](https://github.com/antfu/vitesse-lite)

## 从 [Vitesse-lite](https://github.com/antfu/vitesse-lite) 中删除了以下特性

- ~~vite-plugin-pages~~
- ~~VueUse~~
- ~~Vitest~~

## 预配置

### UI 框架

- [UnoCSS](https://github.com/antfu/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

### Icons

- [Iconify](https://iconify.design) - 使用任意的图标集，浏览：[🔍Icônes](https://icones.netlify.app/)
- [UnoCSS 的纯 CSS 图标方案](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### 插件

- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - 自动加载组件
- [`unocss-preset-weapp`](https://github.com/MellowCo/unocss-preset-weapp) - UnoCSS 小程序预设，兼容在小程序中使用 `Attributify Mode`

## 现在可以试试!

### GitHub 模板

[使用这个模板创建仓库](https://github.com/ares-chang/uni-vitesse/generate).

### 克隆到本地

如果您更喜欢使用更干净的 git 历史记录手动执行此操作

```bash
npx degit ares-chang/uni-vitesse my-uni-app
cd my-uni-app
pnpm i # 如果你没装过 pnpm, 可以先运行: npm install -g pnpm
```

### 运行

参考 uni-app 官方文档：[运行、发布uni-app](https://uniapp.dcloud.net.cn/quickstart-cli.html#%E8%BF%90%E8%A1%8C%E3%80%81%E5%8F%91%E5%B8%83uni-app)