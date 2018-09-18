module.exports = {
    baseUrl: './', 
    devServer: {
       proxy:{
        '/api': {
            target: 'https://www.sojson.com/',
            ws: true,
            changeOrigin: true
        },
        '/open': {
            target: 'https://www.sojson.com/'
        }
       }
    },
    configureWebpack:{
        
    }
}