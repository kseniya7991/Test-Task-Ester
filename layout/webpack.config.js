const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: {
        entry: ["./styles/main.scss", './index.js'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
          },
        open: true,
        compress: true,
        port: 8080
    },
    module: {
        rules: [{
            test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
            type: 'asset/resource',
        },
        {
            test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            type: 'asset/inline',
        }, 
        {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] ,
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename: 'index.html', 
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
}