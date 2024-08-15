const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {  
    name: 'My PWA',  
    themeColor: '#42b983',  
    msTileColor: '#000000',  
    appleMobileWebAppCapable: 'yes',  
    appleMobileWebAppStatusBarStyle: 'black',  
    // 配置更多PWA相关选项...  
  }
})
