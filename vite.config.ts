/* eslint-disable camelcase */
import { resolve } from 'path'
import { UserConfig, ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import px2vp from 'postcss-px2vp'
import viteCompression from 'vite-plugin-compression'
import legacy from '@vitejs/plugin-legacy'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()

  // https://github.com/vitejs/vite/issues/1930
  const env = loadEnv(mode, root)

  return {
    plugins: [
      vue(),
      styleImport({
        libs: [
          {
            libraryName: 'vant',
            esModule: true,
            resolveStyle: (name) => `vant/es/${name}/style/index`,
          },
        ],
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
      legacy(),
    ],
    base: './',
    root,
    resolve: {
      alias: [
        // @/xxxx => src/xxxx
        {
          find: /@\//,
          replacement: pathResolve('src') + '/',
        },
        // #/xxxx => types/xxxx
        {
          find: /#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    css: {
      postcss: {
        plugins: [
          px2vp({
            unitToConvert: 'px',
            viewportWidth(rule) {
              const file = rule.source ? rule.source.input.file : void 0
              // 根据文件名动态配置viewport width
              if (file && file.includes('node_modules/vant')) {
                return 375
              }
              return 750
            },
            unitPrecision: 6,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: true,
            exclude: [],
            landscape: false,
          }),
        ],
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `
            @import "./src/assets/style/biz/index.less";
            @import "./src/assets/style/biz/variables.less";
          `,
          // modifyVars: {},
        },
      },
    },
    build: {
      target: 'es2015',
      outDir: 'dist',
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: true,
          drop_debugger: true,
        },
      },
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
    },
    optimizeDeps: {
      // include: []
    },
  }
}
