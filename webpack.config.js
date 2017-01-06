var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        contentBase: __dirname + '/public/',
    },
    /**
     * 1째 변경 실습사항
     * module: {
        loaders: [
            {
                test: /\.js$/,
                loader: ['react-hot','babel?'+ JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                    })],
                exclude: /node_modules/
            }
        ]
      }
     이런식으로 하니 에러가 발생하였고, 이유는 파악하지 못했지만,
     module > loaders > loader로 설정되는 것이 아닌,
     module > loaders > loaders로 설정을 해줘야한다.
     이유는? 추측컨데 한가지만 로딩하는게 아니라 여러가지를 로딩하려고 시도하기 때문인 것 같다.
     */
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot','babel?'+ JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0','react']
                })],
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}