'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        bootstrap: path.resolve(__dirname, 'src/js/bootstrap.js'),
        main: path.resolve(__dirname, 'src/js/main.js'),
        customselect: path.resolve(__dirname, 'src/js/customselect.js'),
        datepicker: path.resolve(__dirname, 'src/js/datepicker.js'),
        details: path.resolve(__dirname, 'src/js/details.js'),
        checkout: path.resolve(__dirname, 'src/js/checkout.js'),
        cart: path.resolve(__dirname, 'src/js/cart.js'),
        cardpayment: path.resolve(__dirname, 'src/js/cardpayment.js'),
        earnings: path.resolve(__dirname, 'src/js/earnings.js'),
        experiences: path.resolve(__dirname, 'src/js/experiences.js'),
        influencer: path.resolve(__dirname, 'src/js/influencer.js'),
        form: path.resolve(__dirname, 'src/js/form.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:8].js',
        sourceMapFilename: '[name].[hash:8].map',
        chunkFilename: '[id].[hash:8].js',
        clean: true,
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['main', 'bootstrap', 'customselect']
        }),
        new HtmlWebpackPlugin({
            filename: 'details.html',
            template: 'src/details.html',
            chunks: ['main', 'bootstrap', 'customselect', 'datepicker', 'details']
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: 'src/login.html',
            chunks: ['main', 'bootstrap', 'form']
        }),
        new HtmlWebpackPlugin({
            filename: 'signup.html',
            template: 'src/signup.html',
            chunks: ['main', 'bootstrap', 'form']
        }),
        new HtmlWebpackPlugin({
            filename: 'influencer-signup.html',
            template: 'src/influencer-signup.html',
            chunks: ['main', 'bootstrap', 'form']
        }),
        new HtmlWebpackPlugin({
            filename: 'comming-soon.html',
            template: 'src/comming-soon.html',
            chunks: ['main', 'bootstrap']
        }),
        new HtmlWebpackPlugin({
            filename: 'checkout.html',
            template: 'src/checkout.html',
            chunks: ['main', 'bootstrap', 'customselect', 'checkout', 'cardpayment']
        }),
        new HtmlWebpackPlugin({
            filename: 'gift-checkout.html',
            template: 'src/gift-checkout.html',
            chunks: ['main', 'bootstrap', 'customselect', 'checkout', 'cardpayment']
        }),
        new HtmlWebpackPlugin({
            filename: 'cart.html',
            template: 'src/cart.html',
            chunks: ['main', 'bootstrap', 'customselect', 'cart']
        }),
        new HtmlWebpackPlugin({
            filename: 'earnings.html',
            template: 'src/earnings.html',
            chunks: ['main', 'bootstrap', 'customselect', 'earnings']
        }),
        new HtmlWebpackPlugin({
            filename: 'experiences.html',
            template: 'src/experiences.html',
            chunks: ['main', 'bootstrap', 'customselect', 'experiences']
        }),
        new HtmlWebpackPlugin({
            filename: 'influencer-vetting.html',
            template: 'src/influencer-vetting.html',
            chunks: ['main', 'bootstrap', 'customselect', 'influencer']
        }),
        new HtmlWebpackPlugin({
            filename: 'details-postlogin.html',
            template: 'src/details-postlogin.html',
            chunks: ['main', 'bootstrap', 'customselect', 'datepicker', 'details']
        }),
        new HtmlWebpackPlugin({
            filename: 'influencer-postlogin.html',
            template: 'src/influencer-postlogin.html',
            chunks: ['main', 'bootstrap', 'customselect']
        }),
        new HtmlWebpackPlugin({
            filename: 'influencer-experiences.html',
            template: 'src/influencer-experiences.html',
            chunks: ['main', 'bootstrap', 'customselect']
        }),
        new HtmlWebpackPlugin({
            filename: 'password.html',
            template: 'src/password.html',
            chunks: ['main', 'bootstrap', 'customselect', 'form']
        }),
        new HtmlWebpackPlugin({
            filename: 'password-forgot.html',
            template: 'src/password-forgot.html',
            chunks: ['main', 'bootstrap', 'customselect', 'form']
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/'),
                    to: path.resolve(__dirname, 'dist/assets/')
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                mimetype: 'image/svg+xml',
                scheme: 'data',
                type: 'asset/resource',
                generator: {
                    filename: 'icons/[hash].svg'
                }
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: 'style-loader'
                    },
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: 'css-loader'
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    autoprefixer
                                ]
                            }
                        }
                    },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    }
}