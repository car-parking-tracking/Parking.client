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
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'ts-loader',
        },
      ],
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.resolve.extensions = ['.tsx', '.ts', '.jsx', '.js']
    return config
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
