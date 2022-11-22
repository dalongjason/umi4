import { defineConfig } from 'umi'

export default defineConfig({
  npmClient: 'yarn',
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/products', component: '@/pages/products' },
  ],
  extraBabelPlugins: [
    //配置额外的 babel 插件。可传入插件地址或插件函数。
  ],
  extraPostCSSPlugins: [
    //配置额外的 postcss 插件。
  ],
  deadCode: {
    //检测未使用的文件和导出，仅在 build 阶段开启。
  },
});
