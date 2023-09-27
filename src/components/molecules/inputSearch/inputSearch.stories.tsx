import { StoryFn } from '@storybook/react'

import { InputSearch } from './inputSearch'

export default {
  title: 'Search',
  component: InputSearch,
}

const Template: StoryFn = args => <InputSearch />

export const Default = Template.bind({})
Default.args = {}
