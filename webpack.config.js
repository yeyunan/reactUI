var webpack= require('webpack');
module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname,
        filename: "./example/bundle.js"
    },
    module: {
        loaders: [
              {test: /\.js/, loader: 'jsx-loader?harmony'}
        ]
    },
    resolve: {
      modulesDirectories: ['', 'js/base', 'web_modules', 'node_modules']
    },
     plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			sourceMap: false
		})


  ]
};
