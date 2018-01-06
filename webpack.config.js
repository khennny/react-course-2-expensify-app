const path = require('path');

module.exports = {
    //Set entry file and also location for the final bundled file
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },

    // Configure webpack to use babel loader for all .js files exempting the node_modules folder
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test:/\.s?css$/,                        
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]       
        }]
    },
    //The map file for displaying error messages properly in browser
    devtool: 'cheap-module-eval-source-map',
    // Configure webpack dev server
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};