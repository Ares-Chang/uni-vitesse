## 约定式路由

将在此目录中自动生成具有相同文件结构的 UniAPP 路由。查看 [`@uni-helper/vite-plugin-uni-pages`](https://github.com/uni-helper/vite-plugin-uni-pages) 了解更多详情。

### 路径别名

`~/` 是别名为 `./src/` 的文件夹。

例如，原始为:

```ts
import { isDark } from '../../../../composables'
```

现在你可以使用：

```ts
import { isDark } from '~/composables'
```

<br />

## ----- English Document -----

## File-based Routing

Routes will be auto-generated for UniAPP files in this dir with the same file structure.
Check out [`@uni-helper/vite-plugin-uni-pages`](https://github.com/uni-helper/vite-plugin-uni-pages) for more details.

### Path Aliasing

`~/` is aliased to `./src/` folder.

For example, instead of having

```ts
import { isDark } from '../../../../composables'
```

now, you can use

```ts
import { isDark } from '~/composables'
```
