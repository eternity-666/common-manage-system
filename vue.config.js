const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    host: 'localhost', 
    port: 8088,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:4523/m1/1823610-0-default/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }

}
})
