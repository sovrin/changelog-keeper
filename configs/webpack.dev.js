const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const {HotModuleReplacementPlugin} = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './app/assets',
        hot: true,
        historyApiFallback: true,
        proxy: {
            '/api': `http://localhost:8070`,
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
            },
            {
                test: /\.s([ac])ss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'},
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./app/dev.html",
            filename: "./index.html"
        }),
        new HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'app.css',
        }),
    ],
});
