const devMode = process.env.NODE_ENV !== 'production'

const webpack = require('webpack')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const UglifujsWebpackPlugin = require('uglifyjs-webpack-plugin')

const path = __dirname + '/public'

module.exports = {
    entry: './src/index.js',
    mode: devMode ? 'development' : 'production',

    output: {
        path: path,
        filename: 'main.js'
    },

    plugins:[
        new MiniCSSExtractPlugin({
            filename: 'style.css',
        }),
        new OptimizeCSSAssetsWebpackPlugin({})
    ],

    optimization: {
        minimizer: [
            new UglifujsWebpackPlugin({
                cache: true,
                parallel: true
            })
        ]
    },

    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    /* "style-loader" */
                    "sass-loader"
                 ]
            },
            {
                test: /\.(png|jpg|svg|jpeg|gif)$/,
                use: [ "file-loader" ]
            }
     ]
    },

    devServer: {
        contentBase: '/public',
        port: 3000
    },

    resolve: {
        extensions: ['.js', '.jsx']
    }
}