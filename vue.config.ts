<<<<<<< HEAD
import { defineConfig } from '@vue/cli-service';
module.exports = defineConfig({
  transpileDependencies: true,
   pwa: {
    name: "workbox",
    themeColor: "#fff3e0",
    msTileColor: "#fff3e0",
    appleMobileWbeAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#fff3e0",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "./service-worker.js",
      exclude: [/_redirect/, /\.map$/, /_headers/],
    },
    manifestOptions: {
      background_color: "#ffe24a",
    }
  }
})
=======
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        watchOptions: {
            poll: true
        },
        port: 8080,
    },
})
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
