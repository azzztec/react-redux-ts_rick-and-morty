const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    mode: 'development',

    entry: './src/index.js',

    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.jsx' ],
    },

    output: {
        filename: '[name].[fullhash].js',
        path: path.resolve(__dirname, 'dist'),
    },

    devServer: {
        port: '3000',
        contentBase: path.join(__dirname, 'dist'),
        open: true
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [["@babel/preset-env", { "useBuiltIns": "usage", "corejs": 3, "targets": "defaults" }], "@babel/preset-react"]
                        }
                    }
                ]
            },
            // {
            //     test: /\.(ts|tsx)$/,
            //     loader: "ts-loader",
            // },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [autoprefixer]
                            }
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            minify: {
                collapseWhitespace: true
            }
        }),
        new MiniCssExtractPlugin({ filename: '[name].[fullhash].css' }),
        new CleanWebpackPlugin(),
    ],
};