/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, FC } from 'react'

import { InputSearchProps } from './inputSearch.types'

import { Input } from '../../atoms'

export const InputSearch: FC<InputSearchProps> = ({ options, onSearchChange }) => {
  const [value, setValue] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    onSearchChange(newValue)
  }

  return (
    <>
      <Input
        variant='search'
        name='serch'
        type="text"
        value={value}
        onChange={handleInput}
        list="options-list"
        placeholder="Адрес или объект"
      />
      <datalist id="options-list">
        {options.map((item: any, index) => (
          <option
            key={index}
            value={`${item.name} ${item.description !== undefined ? item.description : ''}`}
          />
        ))}
      </datalist>
    </>
  )
}
