import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "~":path.resolve(__dirname,"src")
    }
  },

  server:{
    proxy:{
      '/api': {
        target: 'http://ceshi13.dishait.cn',   // 需替换自己的Api接口服务网址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },

  plugins: [vue(),WindiCSS()]
})
