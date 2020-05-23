const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: './src/index.js'
    },
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
        },{
            test: /\.scss$/,
            use: ['style-loader', {
                loader: 'css-loader',
                options: {
                    modules: true,
                    importLoaders: 2
                }
            } ,'sass-loader', {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        require('autoprefixer')
                    ]
                }
            }]
        },{
            test: /\.(eot|svg|ttf|woff)$/,
            loader: 'file-loader'
        }]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: path.resolve(__dirname, 'bundle')
        }),
        new HTMLWebpackPlugin({
            title: 'Production',
            template: './index.html'
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../', 'bundle')
    }
}