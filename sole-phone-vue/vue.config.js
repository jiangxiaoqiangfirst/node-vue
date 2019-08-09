

// const fs = require('fs')
module.exports = {
  devServer: {
    //webpack的方法，脱离webpack不能使用
    proxy: {
      //代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
      '/api': {
        //axios访问 /api == target + /api
        target: 'http://localhost:3000',
        changeOrigin: true,//创建虚拟服务器
        ws: true //websocket代理，允许后台推送
      },
      '/douban': {
        //axios访问 /douban == target + '/douban'
        target: 'https://douban.uieee.com',
        changeOrigin: true,
        pathRewrite: {
          '^douban': ''
          //axios访问 /douban/v2 == target +/v2
        }
      }
    },
    // host: '0.0.0.0',
    // port: 8003,
    open: false,
    // https: false,
  },
  // css: {
  //     loaderOptions: {
  //         sass: {
  //             data: fs.readFileSync('src/variables.scss', 'utf-8')
  //         }
  //     }
  // },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `
  //             @import "@/assets/css/common.scss";
  //           `
  //     }
  //   }
  // },
  // // lintOnSave:false, //关闭esling警告
  // lintOnSave: process.env.NODE_ENV !== 'production', //生产构建时禁用
  // productionSourceMap:false, //打包不携带map文件
}