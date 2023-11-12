/*
 * @Author: Copyright(c) 2020 Suwings
 * @Author: Copyright(c) 2023 padraignix
 * @Date: 2021-05-08 21:46:34
 * @LastEditTime: 2023-11-12 17:43:11
 * @Description: Updated version for QC Gaming
 */
// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // options...
  publicPath: "./",
  pages: {
    index: {
      entry: "src/app/index.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Quantumly Confused Gaming"
    }
  },
  devServer: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:23333/"
      }
    }
  },
  productionSourceMap: false,
  configureWebpack: {
    plugins: []
  }
};
