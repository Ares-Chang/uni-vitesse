## 布局

当前目录下的 Vue 组件将用作布局。

默认情况下将加载 `default.vue`，除非在路由中进行了设置。

如果同时使用 [`vite-plugin-uni-pages`](https://github.com/uni-helper/vite-plugin-uni-pages) 和 [`vite-plugin-uni-layouts`](https://github.com/uni-helper/vite-plugin-uni-layouts)，您可以在页面的 SFC 中指定布局，如下所示：

```html
<route lang="yaml">
layout: home
</route>
```

## ----- English Document -----

## Layouts

Vue components in this dir are used as layouts.

By default, `default.vue` will be used unless an alternative is specified in the route.

With [`vite-plugin-uni-pages`](https://github.com/uni-helper/vite-plugin-uni-pages) and [`vite-plugin-uni-layouts`](https://github.com/uni-helper/vite-plugin-uni-layouts), you can specify the layout in the page's SFCs like this:

```html
<route lang="yaml">
layout: home
</route>
```
