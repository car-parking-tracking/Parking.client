const path = require('path')
const Dotenv = require('dotenv-webpack');
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
    hot: 'only',
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
    new Dotenv(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg?$/,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
       {
        test: /\.(png|jpg|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    alias: {
		  "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@mocks": path.resolve(__dirname, "src/mocks"),
      "@pages": path.resolve(__dirname, "src/pages"),
		}
  },
}
