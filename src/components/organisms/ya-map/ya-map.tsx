/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import { skipToken } from '@reduxjs/toolkit/dist/query'
import { Map, YMaps, ObjectManager, ZoomControl } from '@pbe/react-yandex-maps'
import { IEvent } from 'yandex-maps'
import { Wrapper } from './ya-map.styles'
import { managerConfig, mapConfig } from './ya-map.config'
import { ParkingCard } from '../parkingCard'
import { YAMAP_API_KEY } from '@constants/environment'
import { Portal } from '@components/atoms'
import { InputSearch } from '@components/molecules'
import placemark from '@assets/icons/placemark.svg'
import placemarkActive from '@assets/icons/placemarkActive.svg'
import { AnyObject } from '@pbe/react-yandex-maps/typings/util/typing'
import { useFetchFeatureCollectionQuery, useFetchGeocodeDataQuery, useFetchLotByIdQuery, useFetchLotsIdCollectionQuery } from '@app/store/api'

export const YaMap: React.FC = () => {
  const [activePortal, setActivePortal] = useState<boolean>(false)
  const [newCoords, setNewCoords] = useState([55.751774, 37.61838])
  const [value, setValue] = useState('')
  const [options, setOptions] = useState<any[]>([])
  const [parkingID, setParkingID] = useState<number | null>(null)
  const [zoom, setZoom] = useState(16)

  const { data } = useFetchFeatureCollectionQuery()

  const { data: geocodeData } = useFetchGeocodeDataQuery(value, {
    skip: !value || !isNaN(Number(value)) || Number(value) === 0,
  })

  const { data: lotData } = useFetchLotByIdQuery(parkingID ?? skipToken)

  const { data: lotsCollectionData } = useFetchLotsIdCollectionQuery(value.replace('Парковка №', '').trim(), {
    skip: !value,
  })

  const handleOpenBalloon = (e: IEvent) => {
    const parkingID = e.get('objectId')
    if (typeof parkingID !== 'number') return

    setParkingID(parkingID)

    e.get('target').getOwner().setObjectOptions(parkingID, {
      iconImageHref: placemarkActive,
    })

    setActivePortal(true)
  }

  const handleCloseBalloon = (e: IEvent) => {
    e.get('target').getOwner().setObjectOptions(parkingID, {
      iconImageHref: placemark,
    })

    setActivePortal(false)
  }

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

    if (!isNaN(Number(newValue))) {
      obg = options.find(item => newValue.includes(item.name))
    } else {
      obg = options.find(item => item.id === Number(newValue.replace('Парковка № ', '')))
    }

    let coords
    if (obg) {
      if (obg.Point) {
        coords = obg.Point.pos
          .split(' ')
          .map((item: any) => Number(item))
          .reverse()
        setNewCoords(coords)
        setZoom(21)
      } else {
        setNewCoords(obg.coords)
        setParkingID(obg.id)
        //manager?.objects.balloon.open(Number(obg.name)) //TODO: доделать открытие балуна
        setZoom(21)
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
            center: newCoords,
            zoom: zoom,
          }}>
          {data && (
            <ObjectManager
              {...managerConfig}
              defaultFeatures={JSON.stringify(data)}
              instanceRef={(ref: AnyObject) => {
                if (ref) {
                  ref.objects.balloon.events.add('open', (e: IEvent) => {
                    handleOpenBalloon(e)
                  })

                  ref.objects.balloon.events.add('close', (e: IEvent) => {
                    handleCloseBalloon(e)
                  })
                }
              }}
            />
          )}
          <ZoomControl options={{ position: { right: 32, top: 90 }, size: 'large' }} />
        </Map>
      </YMaps>
      {activePortal && (
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
