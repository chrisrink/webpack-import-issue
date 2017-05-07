const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'app'),
        path.resolve(__dirname, 'node_modules/jquery-ui'),
        
        
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components')
      ],
      loader: 'babel-loader',
      query: {
        presets: ['env']
      }
    },
    {
      test: /jquery-ui/,
       use: "imports-loader?jQuery=jquery,$=jquery,this=>window,jquery-migrate" //fails
       // use: "imports-loader?jQuery=jquery,$=jquery,this=>window,jquerymigrate" //works
    }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css'],
    alias:{
      jquerymigrate: 'jquery-migrate'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery"
})
  ],
  devtool: 'source-map'
};