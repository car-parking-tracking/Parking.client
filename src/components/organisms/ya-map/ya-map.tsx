/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import { skipToken } from '@reduxjs/toolkit/dist/query'
import { Map, YMaps, ZoomControl } from '@pbe/react-yandex-maps'
import { Wrapper } from './ya-map.styles'
import { mapConfig } from './ya-map.config'
import { ParkingCard } from '../parkingCard'
import { YAMAP_API_KEY } from '@constants/environment'
import { Portal } from '@components/atoms'
import { InputSearch } from '@components/molecules'
import { useFetchGeocodeDataQuery, useFetchLotByIdQuery, useFetchLotsIdCollectionQuery } from '@app/store/api'
import { Manager } from '../manager'
import { useSelector } from 'react-redux'
import { RootState } from '@app/store/store'
import { useAppDispatch } from '@app/hooks/redux'
import { setZoom, setCoords } from '@app/store/slices/mapSlice'

export const YaMap: React.FC = () => {
  const map = useSelector((state: RootState) => state.map)
  const dispatch = useAppDispatch()

  const [value, setValue] = useState('')
  const [options, setOptions] = useState<any[]>([])
  const [parkingID, setParkingID] = useState<number | null>(null)

  const { data: geocodeData } = useFetchGeocodeDataQuery(value, {
    skip: !value || !isNaN(Number(value)) || Number(value) === 0,
  })

  const { data: lotData } = useFetchLotByIdQuery(parkingID ?? skipToken)

  const { data: lotsCollectionData } = useFetchLotsIdCollectionQuery(value.replace('Парковка №', '').trim(), {
    skip: !value,
  })

  useEffect(() => {
    if (lotsCollectionData) {
      const lotsCollection = lotsCollectionData.results.map((lot: any) => {
        const nameParking = `Парковка № ${lot.id}`
        return {
          name: nameParking,
          description: lot.address,
          coords: [lot.latitude, lot.longitude],
          id: lot.id,
        }
      })
      setOptions(() => [...lotsCollection])
    }
  }, [lotsCollectionData])

  useEffect(() => {
    if (geocodeData) {
      const collection = geocodeData.response.GeoObjectCollection.featureMember.map((item: any) => item.GeoObject)
      setOptions(() => collection)
    }
  }, [geocodeData])

  const handleInputChange = (newValue: string) => {
    newValue = newValue.replace('Парковка №', '')
    setValue(newValue)
  }

  const handleOptionClick = (newValue: string) => {
    let obg

    newValue = newValue.replace('Парковка № ', '')

    if (isNaN(Number(newValue))) {
      obg = options.find(item => newValue.includes(item.name))
    } else {
      obg = options.find(item => item.id === Number(newValue))
    }

    let coords
    if (obg) {
      if (obg.Point) {
        coords = obg.Point.pos
          .split(' ')
          .map((item: any) => Number(item))
          .reverse()
        dispatch(setCoords(coords))
        dispatch(setZoom(21))
      } else {
        dispatch(setCoords(obg.coords))
        setParkingID(obg.id)
        //manager?.objects.balloon.open(Number(obg.name)) //TODO: доделать открытие балуна
        dispatch(setZoom(21))
      }
    }
  }

  return (
    <Wrapper>
      <YMaps
        query={{
          load: 'package.full',
          apikey: YAMAP_API_KEY,
        }}>
        <InputSearch options={options} onSearchChange={handleInputChange} onOptionClick={handleOptionClick} />
        <Map
          {...mapConfig}
          state={{
            ...mapConfig.defaultState,
            center: map.coords,
            zoom: map.zoom,
          }}>
          <Manager setParkingIdCallback={setParkingID} />
          <ZoomControl options={{ position: { left: 32, top: 90 }, size: 'large' }} />
        </Map>
      </YMaps>
      {map.portal && (
        <Portal getHTMLElementId={'parking'}>
          <ParkingCard
            id={lotData?.id || 0}
            address={lotData?.address || 'Нет данных'}
            carCapacity={lotData?.car_capacity || 'Нет данных'}
            tariffs={[{ hourPrice: 100 }]}
          />
        </Portal>
      )}
    </Wrapper>
  )
}
