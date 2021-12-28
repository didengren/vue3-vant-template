import { UserConfig, ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import px2vp from 'postcss-px2vp'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  // https://github.com/vitejs/vite/issues/1930
  const env = loadEnv(mode, root);

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
      })
    ],
    base: './',
    resolve: {
      alias: {
        '@': 'src',
        '@stateless': 'src/model/stateless',
        '@stateful': 'src/model/stateful'
      }
    },
    css: {
      postcss: {
        plugins: [
          px2vp({
            unitToConvert: "px",
            viewportWidth(rule) {
              const file = rule.source ? rule.source.input.file : void 0;
              console.log('file', file);
              // 根据文件名动态配置viewport width
              if (file && file.includes('vant')) return 375;
              return 750;
            },
            unitPrecision: 6,
            propList: ["*"],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: true,
            exclude: [],
            landscape: false
          })
        ]
      }
    }
  }
}
