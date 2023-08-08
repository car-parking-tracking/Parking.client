/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import { Map, YMaps, ObjectManager } from '@pbe/react-yandex-maps'
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
import { data } from '@mocks/parkingData'

export const YaMap: React.FC = () => {
  const [activePortal, setActivePortal] = useState<boolean>(false)
  const [manager, setManager] = useState<AnyObject>()
  const [newCoords, setNewCoords] = useState([55.751774, 37.61838])
  const [value, setValue] = useState('')
  const [options, setOptions] = useState<any[]>([])
  const [activeParkingData, setActiveParkingData] = useState<AnyObject | null>(null)

  const handleOpenBalloon = (e: IEvent) => {
    const parkingID = e.get('objectId')
    if (typeof parkingID === 'number') {
      const parkingData = data.find(obj => obj.id === parkingID)
      parkingData && setActiveParkingData(parkingData)
    }

    manager?.objects.setObjectOptions(parkingID, {
      iconImageHref: placemarkActive,
    })
    setTimeout(() => {
      setActivePortal(true)
    }, 0)
  }

  const handleCloseBalloon = (e: IEvent) => {
    manager?.objects.setObjectOptions(e.get('objectId'), {
      iconImageHref: placemark,
    })
    setActivePortal(false)
    setActiveParkingData(null)
  }

  useEffect(() => {
    manager?.objects.balloon.events.add('open', (e: IEvent) => {
      handleOpenBalloon(e)
    })

    manager?.objects.balloon.events.add('close', (e: IEvent) => {
      handleCloseBalloon(e)
    })

    return () => {
      manager?.objects.balloon.events.remove('open', (e: IEvent) => {
        handleOpenBalloon(e)
      })

      manager?.objects.balloon.events.remove('close', (e: IEvent) => {
        handleCloseBalloon(e)
      })
    }
  }, [manager])

  useEffect(() => {
    (async () => {
      try {
        if (value) {
          const res = await fetch(
            `https://geocode-maps.yandex.ru/1.x/?apikey=${YAMAP_API_KEY}&geocode=Москва, улица ${value}&ll=55.751774,37.618380&spn=1.5,1.5&format=json`
          )
          const data = await res.json()
          const collection = data.response.GeoObjectCollection.featureMember.map((item: any) => item.GeoObject)
          setOptions(() => collection)
        }
      } catch (e) {
        console.log(e)
      }
    })()
  }, [value])

  const handleInputChange = (newValue: string) => {
    const obg = options.find(item => newValue.includes(item.name) && newValue.includes(item.description))
    if (obg) {
      const coords = obg.Point.pos
        .split(' ')
        .map((item: any) => Number(item))
        .reverse()
      setNewCoords(coords)
    }
    setValue(newValue)
  }

  return (
    <Wrapper>
      <YMaps
        query={{
          load: 'package.full',
          apikey: YAMAP_API_KEY,
        }}>
        <InputSearch options={options} onSearchChange={handleInputChange} />
        <Map
          {...mapConfig}
          state={{
            ...mapConfig.defaultState,
            center: newCoords,
          }}>
          <ObjectManager {...managerConfig} instanceRef={(ref: AnyObject) => setManager(ref)} />
          {activePortal && (
            <Portal getHTMLElementId={'parking'}>
              <ParkingCard
                id={activeParkingData?.id || 0}
                address={activeParkingData?.address || 'Нет данных'}
                carCapacity={activeParkingData?.carCapacity || 'Нет данных'}
                tariffs={activeParkingData?.tariffs || 'Нет данных'}
              />
            </Portal>
          )}
        </Map>
      </YMaps>
    </Wrapper>
  )
}
