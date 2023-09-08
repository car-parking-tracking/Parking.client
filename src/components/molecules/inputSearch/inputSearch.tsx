/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, FC, useEffect } from 'react'

import { WrapperInput, DataList, Option, Search, Wrapper, Name, Description, ClearButton, ClearIcon } from './inputSearch.styles'

import close from '@assets/icons/close.svg'
import { useFetchGeocodeDataQuery, useFetchLotsIdCollectionQuery } from '@app/store/api'
import { setCoords, setParkingId, setZoom } from '@app/store/slices/mapSlice'
import { useAppDispatch } from '@app/hooks/redux'

export const InputSearch: FC = () => {
  const [value, setValue] = useState('')
  const [stringValue, setStringValue] = useState('')
  const [showOptions, setShowOptions] = useState(false)
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isEmptyOptions, setIsEmptyOptions] = useState(false)
  const [options, setOptions] = useState<any[]>([])
  const dispatch = useAppDispatch()

  const { data: geocodeData } = useFetchGeocodeDataQuery(value, {
    skip: !value || !isNaN(Number(value)) || Number(value) === 0,
  })

  const { data: lotsCollectionData } = useFetchLotsIdCollectionQuery(value.replace('Парковка № ', '').trim(), {
    skip: !value,
  })

  useEffect(() => {
    if (lotsCollectionData) {
      setOptions(() => lotsCollectionData)
    }
  }, [lotsCollectionData])

  useEffect(() => {
    if (geocodeData) {
      setOptions(() => geocodeData)
    }
  }, [geocodeData])

  useEffect(() => {
    setIsEmptyOptions(options.length === 0)
  }, [options])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue.replace('Парковка № ', ''))
    setStringValue(newValue)
    setShowOptions(true)
  }

  const handleOptionClick = (newValue: string) => {
    setStringValue(newValue)
    let obg

    newValue = newValue.replace('Парковка № ', '')

    if (isNaN(Number(newValue))) {
      obg = options.find(item => newValue.includes(item.name))
    } else {
      obg = options.find(item => item.id === Number(newValue))
    }

    if (obg) {
      if (obg.Point) {
        const coords = obg.Point.pos
          .split(' ')
          .map((item: any) => Number(item))
          .reverse()
        dispatch(setCoords(coords))
        dispatch(setZoom(21))
      } else {
        dispatch(setCoords(obg.coords))
        dispatch(setParkingId(obg.id))
        //manager?.objects.balloon.open(Number(obg.name)) //TODO: доделать открытие балуна
        dispatch(setZoom(21))
      }
    }
    setShowOptions(false)
  }

  const handleClearClick = () => {
    setValue('')
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
          value={stringValue}
          onChange={handleInput}
          onFocus={handleInputFocus}
          list="options-list"
          placeholder="Название улицы или № парковки"
          autoComplete="off"
          showOptions={showOptions}
        />
        {isInputFocused && value && (
          <ClearButton onClick={handleClearClick}>
            <ClearIcon src={close} alt="Очистить" />
          </ClearButton>
        )}
        {showOptions && (
          <DataList>
            {isEmptyOptions ? (
              <Option>
                <Name>Ничего не найдено</Name>
              </Option>
            ) : (
              options.map((item: any, index) => (
                <Option key={index} onClick={() => handleOptionClick(`${item.name}`)}>
                  <Name>{item.name}</Name>
                  <Description>{item.description}</Description>
                </Option>
              ))
            )}
          </DataList>
        )}
      </WrapperInput>
    </Wrapper>
  )
}
