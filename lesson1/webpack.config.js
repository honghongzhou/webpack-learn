const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [{
            test: /\.jpg$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    outputPath: 'images/'
                }
                // loader: 'url-loader',  //可以替换file-loader，将图片以base64形式打包到bundle.js中(limit超过之后还是会单独打包)
                // options: {
                //     // placeholder  占位符
                //     name: '[name].[ext]',
                //     outputPath: 'images/',
                //     // limit: 20480
                // }
            }
        },{
            test: /\.css$/,
            use: ['style-loader', {
                loader: 'css-loader',
                options: {
                    modules: true
                }
            }]
        }
        ,{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader','sass-loader','postcss-loader']
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'bundle'),
        publicPath: 'bundle/'
    }
}