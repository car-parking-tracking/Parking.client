/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config, { configType }) => {
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
      "@atoms": path.resolve(__dirname, "../", "src/components/atoms"),
      "@molecules": path.resolve(__dirname, "../", "src/components/molecules"),
      "@organisms": path.resolve(__dirname, "../", "src/components/organisms"),
      "@templates": path.resolve(__dirname, "../", "src/components/templates"),
    }
    return config
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
