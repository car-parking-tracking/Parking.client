/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, FC } from 'react'

import { InputSearchProps } from './inputSearch.types'

import {
  WrapperInput, DataList, Option, Search,
  Wrapper,
} from './inputSearch.styles'

export const InputSearch: FC<InputSearchProps> = ({ options, onSearchChange }) => {
  const [value, setValue] = useState('')
  const [showOptions, setShowOptions] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    onSearchChange(newValue)
    setShowOptions(newValue !== '')
  }

  const handleOptionClick = (newValue: string) => {
    setValue(newValue);
    onSearchChange(newValue);
    setShowOptions(false);
  };

  return (
    <Wrapper>
      <img src='' />
      <WrapperInput>
        <Search
          variant='search'
          name='serch'
          type="text"
          value={value}
          onChange={handleInput}
          list="options-list"
          placeholder="Название улицы или № парковки"
        />
        {showOptions && (
          <DataList>
            {options.map((item: any, index) => (
              <Option
                key={index}
                onClick={() => handleOptionClick(`${item.name} ${item.description}`)}
              >
                {`${item.name} ${item.description}`}
              </Option>
            ))}
          </DataList>
        )}
      </WrapperInput>
    </Wrapper>
  )
}
