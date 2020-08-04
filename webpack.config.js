const path = require('path');
const RemovePlugin = require('remove-files-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new RemovePlugin({
            /**
             * Before compilation permanently removes
             * entire `./dist` folder.
             */
            before: {
                folder: 'dist',
            },
        }),
        new HtmlWebpackPlugin({
            title: 'Adyen test',
        }),
    ],
    devServer: {
        contentBase: './dist',
    },
};
