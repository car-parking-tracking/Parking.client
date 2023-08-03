import { decorateWithLoginContext, decorateWithRouter } from './decorators'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'default',
      values: [
        {
          name: 'default',
          value: '#9d9fa9',
        },
        {
          name: 'light',
          value: '#f8f8f8',
        },
        {
          name: 'dark',
          value: '#333',
        },
        {
          name: 'brand',
          value: '#272b3b',
        },
      ]
    }
  },
  decorators: [decorateWithRouter, decorateWithLoginContext]
}

export default preview
