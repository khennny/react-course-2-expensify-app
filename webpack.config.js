const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production'
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        //Set entry file and also location for the final bundled file
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public','dist'),
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
                use: CSSExtract.extract({
                    use:[                        
                        {
                            loader:'css-loader',
                            options:{
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options:{
                                sourceMap:true
                            }
                        }
                    ]
                })      
            }]
        },
        plugins:[
            CSSExtract
        ],
        //The map file for displaying error messages properly in browser
        devtool: isProduction ? 'source-map' : 'inline-source-map',//'cheap-module-eval-source-map',
        // Configure webpack dev server
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath:'/dist/'
        }
    };
};