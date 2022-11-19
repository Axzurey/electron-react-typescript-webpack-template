const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');
const path = require('path');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = [
    {
        mode: isDevelopment ? 'development' : 'production',
        entry: './electron/main.ts',
        target: 'electron-main',
        module: {
            rules: [{
            test: /\.ts$/,
            include: /electron/,
            use: [{ loader: 'ts-loader' }]
            }]
        },
        output: {
            path: __dirname + '/dist/electron',
            filename: 'main.js',
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.json', '.css', '.html'],
            modules: ['electron', 'node_modules'],
        },
    },
    {
        mode: isDevelopment ? 'development' : 'production',
        entry: ['react-hot-loader/patch', './src/index.tsx'],
        target: 'web',
        devtool: 'inline-source-map',
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.json', '.css', '.html'],
            modules: ['src', 'node_modules'],
        },
        module: { rules: [{
            test: /\.ts(x?)$/,
            include: /src/,
            use: [{ loader: 'ts-loader', }],
        }] },
        output: {
            path: __dirname + '/dist',
            filename: 'index.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html'
            })
        ],
        devServer: {
            port: 3000,
            hot: true,
            liveReload: false
        }
    }
];