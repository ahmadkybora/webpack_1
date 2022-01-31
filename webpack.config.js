// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const isProduction = process.env.NODE_ENV == "production";
// const { VueLoaderPlugin } = require('vue-loader');

const config = {
    entry: "./src/index.js",
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, "dist"),
        publicPath: 'dist/'
    },
    devServer: {
        open: true,
        host: "localhost",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['transform-class-properties']
                    }
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {
                test: /\.html$/i,
                use: ["html-loader"],
            },
            {
                test: /\.css$/i,
                use: [
                    "MiniCssExtractPlugin.loader",
                    "css-loader",
                    'vue-style-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            // لودر زیر برای فایلهای موتور هندلبار است
            // {
            //     test: /\.hbs$/,
            //     use: [
            //         'handlebars-loader'
            //     ]
            // },
            // {
            //     test: /\.vue$/,
            //     loader: 'vue-loader'
            // },
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    plugins: [
        // new VueLoaderPlugin(),
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new CleanWebpackPlugin,

        new HtmlWebpackPlugin({
            // این قسمت یک
            // template engin 
            // میباشد برایاینکه کدهای 
            // html
            // را در
            // جاوااسکریپت بنویسیم
            // من از
            // handlebar
            // استفاده کردم
            // template: 'src/index.hbs',
            // در حالت بیلد وب پک دسترسی به این قسمت از فایل
            // html
            // را گرفته که آن را اینگونه کانفیگ میکنیم
            title: 'Hello World',
            filename: 'subfolder/custom_filename.html',
            meta: {
                viewport: 'width=device-width, initial-scale=1'
            }
        }),
    ]
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";

        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
    } else {
        config.mode = "development";
    }
    return config;
};