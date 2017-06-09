const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app/index.js',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, '../static/'),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.(sass|scss)$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader']
            })
        }, {
            test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: '/fonts/',
                publicPath: ''
            }
        }]
    },
    plugins: [
        new ExtractTextPlugin('/css/styles.css')
    ]
};

