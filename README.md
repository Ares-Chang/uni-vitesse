<p align='center'>
  <img src='https://user-images.githubusercontent.com/36911513/250519667-0b07fd60-968d-4d81-9185-1e8ac421ab02.png' alt='Uni Vitesse - Opinionated Vite Starter Template' width='800'/>
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

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 6](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - 就是快！

- 🗂 [基于文件的约定式路由](https://github.com/Ares-Chang/uni-vitesse/tree/master/src/pages)

- 📦 [组件自动化加载](https://github.com/Ares-Chang/uni-vitesse/blob/master/src/components)

- 📑 [布局系统](https://github.com/Ares-Chang/uni-vitesse/tree/master/src/layouts)

- 🍍 [使用 Pinia 的状态管理](https://pinia.vuejs.org)

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

- 😃 [各种图标集为你所用](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 📥 [API 自动导入](https://github.com/Ares-Chang/uni-vitesse/tree/master/src/composables) - 直接使用 Composition API 等

- 🦾 TypeScript, 当然

- 🔒︎ [锁 pnpm 包管理](https://pnpm.io/only-allow-pnpm)

- ☁️ 零配置部署 [Netlify](https://www.netlify.com/)

<br>

如无跨端需求, 更推荐 [Vitesse-lite](https://github.com/antfu/vitesse-lite)

## 使用注意

`VueUse@10.x` 及之后[不专门兼容 UniApp](https://github.com/dcloudio/uni-app/issues/4604)，可以安装 `VueUse@9.x` 之前版本，或者使用 [vite-plugin-uni-polyfill](https://github.com/Ares-Chang/vite-plugin-uni-polyfill) 插件，做简单兼容。

但小程序端即使做了兼容，也存在部分 API 不支持的情况，需要自行判断。

## 预配置

### UI 框架

- [UnoCSS](https://github.com/antfu/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

### Icons

- [Iconify](https://iconify.design) - 使用任意的图标集，浏览：[🔍Icônes](https://icones.netlify.app/)

- [UnoCSS 的纯 CSS 图标方案](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### 插件

- [`Pinia`](https://pinia.vuejs.org) - 符合直觉的 Vue.js 状态管理库

- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入

- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - 组件自动导入

- [`vite-plugin-vue-devtools`](https://github.com/webfansplz/vite-plugin-vue-devtools) - 旨在增强 Vue 开发者体验。

- [`@areschang/utils`](https://github.com/Ares-Chang/utils) - 个人常用工具函数

- [`uni-use-router`](https://github.com/Ares-Chang/uni-use-router) - UniApp 路由跳转补充函数库，与 Vue Router 语法靠近

- [`VueUse`](https://github.com/vueuse/vueuse) - 基于 Vue 3 的 Composition API 的实用函数库

- [`uni-helper`](https://github.com/uni-helper) 组织

  - [`vite-plugin-uni-pages`](https://github.com/uni-helper/vite-plugin-uni-pages) - 基于文件的约定式路由

  - [`vite-plugin-uni-layouts`](https://github.com/uni-helper/vite-plugin-uni-layouts) - 页面布局系统

  - [`uni-types`](https://github.com/uni-helper/uni-typed/tree/main/packages/uni-types) - UniApp 类型增强

  - [`unocss-preset-uni`](https://github.com/uni-helper/unocss-preset-uni) - UnoCSS UniApp 预设，修复 `Windows` 平台频繁崩溃问题 [#3603](https://github.com/dcloudio/uni-app/issues/3603)

    - [`unocss-applet`](https://github.com/unocss-applet/unocss-applet) - UnoCSS 小程序预设，兼容在小程序中使用 `Attributify Mode`

  - [`eslint-config`](https://github.com/uni-helper/eslint-config) - 适用于 UniApp 的 [Antfu ESLint](https://github.com/antfu/eslint-config) 配置

  - [`uni-use`](https://github.com/uni-helper/uni-use) - 基于 VueUse 的 UniApp 实用函数库补充

### 编码风格

- 使用 [`<script setup>` 的 SFC 语法](https://github.com/vuejs/rfcs/pull/227) 与 Composition API 结合使用。
- 使用 [ESLint](https://eslint.org/) 工具检查代码格式，并使用 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 配置，使用单引号并去掉分号。

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

### 检查清单

当您使用此模板时，请尝试按照清单正确更新您的信息

- [ ] 更改 `LICENSE` 中的作者姓名
- [ ] 更改 `manifest.json` 中的项目名称，描述，`appid` 等
- [ ] 更改 `public` 中的图标
- [ ] 整理 `README` 并删除演示页面和组件

接下来就请享受吧！:)

### 运行

参考 uni-app 官方文档：[运行、发布uni-app](https://uniapp.dcloud.net.cn/quickstart-cli.html#%E8%BF%90%E8%A1%8C%E3%80%81%E5%8F%91%E5%B8%83uni-app)
