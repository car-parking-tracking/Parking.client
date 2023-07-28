const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV == 'production'
console.log('Production mode: ', isProduction)

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    index: './src/app.tsx',
  },
  devServer: {
    open: true,
    compress: true,
    static: './dist',
    // https: true,
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    client: {
      overlay: false,
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
  },
}
