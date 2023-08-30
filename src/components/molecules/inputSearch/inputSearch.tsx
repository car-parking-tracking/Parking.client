/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, FC, useEffect } from 'react'

import { InputSearchProps } from './inputSearch.types'

import { WrapperInput, DataList, Option, Search, Wrapper, Name, Description, ClearButton, ClearIcon } from './inputSearch.styles'

import close from '@assets/icons/close.svg'

export const InputSearch: FC<InputSearchProps> = ({ options, onSearchChange }) => {
  const [value, setValue] = useState('')
  const [showOptions, setShowOptions] = useState(false)
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isEmptyOptions, setIsEmptyOptions] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsEmptyOptions(options.length === 0 && !isLoading)
  }, [options, isLoading])

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
    setShowOptions(false)
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
            {
            // isEmptyOptions ? (
            //   <Option>
            //     <Name>Ничего не найдено</Name>
            //   </Option>
            // ) : (
              options.map((item: any, index) => (
                <Option key={index} onClick={() => handleOptionClick(`${item.name}`)}>
                  <Name>{item.name}</Name>
                  <Description>{item.description}</Description>
                </Option>
              ))
            // )
            }
          </DataList>
        )}
      </WrapperInput>
    </Wrapper>
  )
}
