const merge = require('webpack-merge')
const argv = require('yargs-parser')(process.argv.slice(2))

const { mode = 'development' } = argv
const mergeConfig = require(`./config/webpack.${mode}`)
const { join, resolve } = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')
const  WebpackBuildNotifierPlugin = require('webpack-build-notifier');

module.exports = merge(
  {
    entry: {
      app: resolve('./src/web/index.tsx'),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)/,
          include: [resolve('src')],
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    plugins: [
      new CheckerPlugin(),
      new WebpackBuildNotifierPlugin({
        title: "💕 主人 为您构建好了",
        suppressSuccess: true
      })
    ]
  },
  mergeConfig
)
