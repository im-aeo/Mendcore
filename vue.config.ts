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
