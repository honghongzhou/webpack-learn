const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config.js')
// 在node中直接使用webpack
const compiler = webpack(config)

const app = express()

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))

app.listen(3000, () => {
    console.log('server is running!')
})

// 手写类似webpack dev server得功能
// 修改之后需要手动刷新页面