const path = require('path')

function resolve(dir) {
	return path.join(__dirname, dir)
}
module.exports = {
	publicPath: '/',
	lintOnSave: false,
	productionSourceMap: false,
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('@assets', resolve('src/assets'))
			.set('@components', resolve('src/components'))
			.set('@until', resolve('src/until'))
	},
	// ...
	css: {
		// extract: true,
		// 驼峰
		// camelCase: true,
		loaderOptions: {
			sass: {
				prependData: `@import "@/assets/sass/index.scss";`,
			},
		},
	},
	configureWebpack: {
		resolve: {
			extensions: ['.js', '.vue', '.json', '.ts', '.tsx'], // 加入ts 和 tsx
		},
		//或者
		//警告 webpack 的性能提示
		performance: {
			hints: 'warning',
			//入口起点的最大体积
			maxEntrypointSize: 50000000,
			//生成文件的最大体积
			maxAssetSize: 30000000,
			//只给出 js 文件的性能提示
			assetFilter: function(assetFilename) {
				return assetFilename.endsWith('.js')
			},
		},
	},
	devServer: {
		port: 8800, // webpack-dev-server port
	},
}
