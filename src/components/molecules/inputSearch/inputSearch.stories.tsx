import { StoryFn } from '@storybook/react'

import { InputSearch } from './inputSearch'
import { InputSearchProps } from './inputSearch.types'

export default {
  title: 'Search',
  component: InputSearch
}

const Template: StoryFn<InputSearchProps> = args => <InputSearch {...args} />

export const Default = Template.bind({})
Default.args = {
  options: [
    { name: 'Херсонская улица, 12-14', description: 'Москва' },
    { name: 'Херсонская улица, 32 ', description: 'Москва' },
  ],
}
