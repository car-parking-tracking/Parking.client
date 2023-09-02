import path from 'path';
/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules = [
      ...config.module.rules.map(rule => {
        if (/svg/.test(rule.test)) {
          return { ...rule, exclude: /\.svg$/i }
        }
        return rule
      }),
    ]
    
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
    })  

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'ts-loader',
        },
      ],
    })

    config.resolve.extensions = ['.tsx', '.ts', '.jsx', '.js']
    config.resolve.alias = {
      "@components": path.resolve(__dirname, "../", "src/components"),
      "@assets": path.resolve(__dirname, "../", "src/assets"),
      "@constants": path.resolve(__dirname, "../", "src/constants"),
      "@mocks": path.resolve(__dirname, "../", "src/mocks"),
      "@pages": path.resolve(__dirname, "../", "src/pages"),
    }
    return config
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
