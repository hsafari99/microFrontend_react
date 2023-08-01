const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const deps = require('../package.json').dependencies;

const devConfig = {
    mode: 'development',
    devServer: {
        port: 3001,
        historyApiFallback: {
            index: '/index.html',
        },
        hot: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'coreComponents',
            filename: 'remoteEntry.js',
            exposes: {
                './Core': './src/bootstrap.tsx',
            },
            shared: { ...deps },
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);