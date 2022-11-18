const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
        mode: 'development',
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
            filename: 'electron.js',
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.json', '.css', '.html'],
            modules: ['electron', 'node_modules']
        },
    },
    {
        mode: 'development',
        entry: './src/index.tsx',
        target: 'web',
        devtool: 'inline-source-map',
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.json', '.css', '.html'],
            modules: ['src', 'node_modules']
        },
        module: { rules: [{
            test: /\.ts(x?)$/,
            include: /src/,
            use: [{ loader: 'ts-loader' }]
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
            hot: true
        }
    }
];