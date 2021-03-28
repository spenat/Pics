module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/'},
      },
      '^/images': {
        target: 'http://localhost:7777',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/images': '/'},
      } 
    }
  }
}
