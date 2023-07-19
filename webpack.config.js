const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV == 'production'
console.log('Production mode: ', isProduction)

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    index: './src/app.tsx',
    styles: './src/styles.scss',
  },
  devServer: {
    open: true,
    compress: true,
    hot: 'only',
    // https: true,
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    client: {
      overlay: false,
      // overlay: { errors: true, warnings: false, runtimeErrors: true, },
    },
  },
  output: {
    // filename: "main.js",
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
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
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
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
