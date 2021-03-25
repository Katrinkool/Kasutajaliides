const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
module.exports = {
    entry: './src/main.js',
    devServer: {
        contentBase: path.join(__dirname, '.'),
        compress: true,
        port: 9000,
        hot: true
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
            },
            {
                test: /\.css$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                ],
                },
        ],
        
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'  
        })
    ],
    resolve: {
        extensions: [ '.js', '.vue' ],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    }
};