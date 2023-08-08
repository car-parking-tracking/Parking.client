/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, FC } from 'react'

import { InputSearchProps } from './inputSearch.types'

import { WrapperInput, DataList, Option, Search, Wrapper, Name, Description, ClearButton, ClearIcon } from './inputSearch.styles'

import close from '@assets/icons/close.svg'

export const InputSearch: FC<InputSearchProps> = ({ options, onSearchChange }) => {
  const [value, setValue] = useState('')
  const [showOptions, setShowOptions] = useState(false)
  const [isInputFocused, setIsInputFocused] = useState(false)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    onSearchChange(newValue)
    setShowOptions(newValue !== '')
  }

  const handleOptionClick = (newValue: string) => {
    setValue(newValue)
    onSearchChange(newValue)
    setShowOptions(false)
  }

  const handleClearClick = () => {
    setValue('')
    onSearchChange('')
  }

  const handleInputFocus = () => {
    setIsInputFocused(true)
  }

  return (
    <Wrapper>
      <WrapperInput>
        <Search
          variant="search"
          name="search"
          type="text"
          value={value}
          onChange={handleInput}
          onFocus={handleInputFocus}
          list="options-list"
          placeholder="Название улицы или № парковки"
          showOptions={showOptions}
        />
        {isInputFocused && value && (
          <ClearButton onClick={handleClearClick}>
            <ClearIcon src={close} alt="Очистить" />
          </ClearButton>
        )}
        {showOptions && (
          <DataList>
            {options.map((item: any, index) => (
              <Option key={index} onClick={() => handleOptionClick(`${item.name} ${item.description}`)}>
                <Name>{item.name}</Name>
                <Description>{item.description.split(',')[0]}</Description>
              </Option>
            ))}
          </DataList>
        )}
      </WrapperInput>
    </Wrapper>
  )
}
