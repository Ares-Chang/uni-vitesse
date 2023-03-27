import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    /**
     * unocss
     * @see https://github.com/antfu/unocss
     * see unocss.config.ts for config
    */
    Unocss(),

    uni(),
  ],
})
