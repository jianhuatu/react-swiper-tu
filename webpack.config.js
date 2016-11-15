var path = require('path');

//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

const webpackUMDExternal = require('webpack-umd-external');

const webpack = require('webpack')

module.exports = {
	//项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
	entry: [
		path.resolve(APP_PATH, 'index.jsx')
	],
	//输出的文件名 合并以后的js会命名为bundle.js
	output: {
		path: BUILD_PATH,
		filename: 'index.min.js',
		library: 'ReactSwipe',
        libraryTarget: 'umd',
        umdNamedDefine: true
	},
	externals: webpackUMDExternal({
        'react': 'React',
        'swiper-tu': 'Swipe'
    }),
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css'],
				include: APP_PATH
			},
			{
				test: /\.(png|jpg)$/,
		        loader: 'url?limit=40000'
		    },
		    {
				test: /\.jsx?$/,
				loader: 'babel',
				include: APP_PATH,
				query: {
				  presets: ['es2015','react',"stage-0"]
				}
			}
		]
	}//,
	// plugins: [
	// 	//压缩文件
	// 	new webpack.optimize.UglifyJsPlugin({
	//       compress: {
	//         warnings: false
	//       }
	//     })
	// ]
};