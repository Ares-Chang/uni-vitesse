import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
})
