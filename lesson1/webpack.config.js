const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
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
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './bundle'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: path.resolve(__dirname, 'bundle')
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'bundle'),
        // publicPath: 'bundle/'
    }
}