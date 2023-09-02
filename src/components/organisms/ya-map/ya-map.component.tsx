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
  const [manager, setManager] = useState<AnyObject>()
  const [newCoords, setNewCoords] = useState([55.751774, 37.61838])
  const [value, setValue] = useState('')
  const [options, setOptions] = useState<any[]>([])
  const [activeParkingData, setActiveParkingData] = useState<AnyObject | null>(null)
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

  useEffect(() => {
    lotData && setActiveParkingData(lotData)
  }, [lotData])

  const handleOpenBalloon = (e: IEvent) => {
    const parkingID = e.get('objectId')
    if (typeof parkingID !== 'number') return
    setParkingID(parkingID)

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
    if (lotsCollectionData) {
      const lotsCollection = lotsCollectionData.results.map((lot: any) => {
        const nameParking = `Парковка № ${lot.id} `
        return {
          name: nameParking,
          description: lot.address,
          coords: [lot.latitude, lot.longitude],
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
    setValue(newValue)
  }

  const handleOptionClick = (newValue: string) => {
    let obg

    if (isNaN(Number(newValue))) {
      obg = options.find(item => newValue.includes(item.name))
    } else {
      obg = options.find(item => item.name === Number(newValue))
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
        const parkingNumber = obg.name.replace('Парковка №', '').trim()
        setNewCoords(obg.coords)
        setParkingID(parkingNumber)
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
          {data && <ObjectManager {...managerConfig} defaultFeatures={JSON.stringify(data)} instanceRef={(ref: AnyObject) => setManager(ref)} />}

          <ZoomControl options={{ position: { right: 32, top: 90 }, size: 'large' }} />

          {activePortal && (
            <Portal getHTMLElementId={'parking'}>
              <ParkingCard
                id={activeParkingData?.id || 0}
                address={activeParkingData?.address || 'Нет данных'}
                carCapacity={activeParkingData?.car_capacity || 'Нет данных'}
                tariffs={[{ hourPrice: 100 }]}
              />
            </Portal>
          )}
        </Map>
      </YMaps>
    </Wrapper>
  )
}
