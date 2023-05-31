<p align='center'>
  <img src='https://user-images.githubusercontent.com/36911513/229357982-0e03b4c3-780d-470a-9a42-070118a7366d.png' alt='Uni Vitesse - Opinionated Vite Starter Template' width='800'/>
</p>

<h6 align='center'>
<a href="https://uni-vitesse.netlify.app/">Live Demo</a>
</h6>

<h5 align='center'>
<b>UniAPP version of <a href="https://github.com/antfu/vitesse-lite">Vitesse-lite</a></b>
</h5>

<br/>

<p align='center'>
<a href="https://github.com/Ares-Chang/uni-vitesse/blob/master/README.md">简体中文</a> | <b>English</b>
</p>

<br/>

Environment configuration Copy From [Vitesse-lite](https://github.com/antfu/vitesse-lite), Strive for a development experience good environment configuration.

 ## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 [File based routing](https://github.com/Ares-Chang/uni-vitesse/tree/master/src/pages)

- 📦 [Components auto importing](https://github.com/Ares-Chang/uni-vitesse/blob/master/src/components)

- 📑 [Layout system](https://github.com/Ares-Chang/uni-vitesse/tree/master/src/layouts)

- 🍍 [State Management via Pinia](https://pinia.vuejs.org)

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - The instant on-demand atomic CSS engine.

- 😃 Use icons from any icon sets in [Pure CSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🔥 Use the [new `<script setup>` style](https://github.com/vuejs/rfcs/pull/227)

- 🦾 TypeScript, of course

- 🔒︎ [Lock the pnpm package manager](https://pnpm.io/only-allow-pnpm)

<br>

If there is no cross-end requirement, [Vitesse-lite](https://github.com/antfu/vitesse-lite) is recommended

## Dropped Features from  [Vitesse-lite](https://github.com/antfu/vitesse-lite)

- ~~vite-plugin-pages~~
- ~~VueUse~~
- ~~Vitest~~

## Pre-packed

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### 插件

- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [`unocss-preset-weapp`](https://github.com/MellowCo/unocss-preset-weapp) - UnoCSS applets preset, compatible with the use of 'Attributify Mode' in applets

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/ares-chang/uni-vitesse/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit ares-chang/uni-vitesse my-uni-app
cd my-uni-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

### Run

Refer to uni-app official documentation：[运行、发布uni-app](https://uniapp.dcloud.net.cn/quickstart-cli.html#%E8%BF%90%E8%A1%8C%E3%80%81%E5%8F%91%E5%B8%83uni-app)
