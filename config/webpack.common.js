const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        preset: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-trnsform-runtime',],
                    },
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};