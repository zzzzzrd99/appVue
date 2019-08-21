module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://www.i-cake.com',
                // 是否跨域
                changeOrigin: true,
                // websocket配置
                ws: true,
            },
            '/uploads':{
                target: 'http://www.i-cake.com',
                // 是否跨域
                changeOrigin: true,
            }
        }
    },
    publicPath:"./"
};