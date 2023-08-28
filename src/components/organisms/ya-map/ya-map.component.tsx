/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
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
import { useFetchFeatureCollectionQuery, useFetchFeatureIdCollectionQuery } from '@app/store/api/collection/collectionApi'
import { useFetchGeocodeDataQuery } from '@app/store/api/geocoder/geocoderApi'
import { useFetchLotsDataQuery } from '@app/store/api/lots/lotsApi'

export const YaMap: React.FC = () => {
  const [activePortal, setActivePortal] = useState<boolean>(false)
  const [manager, setManager] = useState<AnyObject>()
  const [newCoords, setNewCoords] = useState([55.751774, 37.61838])
  const [value, setValue] = useState('')
  const [options, setOptions] = useState<any[]>([])
  const [activeParkingData, setActiveParkingData] = useState<AnyObject | null>(null)
  const [zoom, setZoom] = useState(16)
  const [lotsOptions, setLotsOptions] = useState<any[]>([]);

  const { data } = useFetchFeatureCollectionQuery()

  const { data: geocodeData } = useFetchGeocodeDataQuery(value, {
    skip: !value,
  })

  const { data: parkingData } = useFetchFeatureIdCollectionQuery(value, {
    skip: !value,
  })


  const handleOpenBalloon = (e: IEvent) => {
    const parkingID = e.get('objectId')
    if (typeof parkingID === 'number') {
      ; (async () => {
        try {
          const res = await fetch(`http://91.226.83.42/api/v1/parking_lots/${parkingID}/`)
          const data = await res.json()
          setActiveParkingData(data)
        } catch (e) {
          console.log(e)
        }
      })()
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
    if (geocodeData) {
      const collection = geocodeData.response.GeoObjectCollection.featureMember.map((item: any) => item.GeoObject)
      setOptions(() => collection)
      console.log(collection);
    }
  }, [geocodeData])

  useEffect(() => {
    if (parkingData) {
      // Обработка данных из data.features и добавление их в options
      const featuresCollection = parkingData.features.map((feature: any) => {
        return {
          name: `Парковка № ${feature.id}`,
          description: feature.geometry.coordinates
        };
      });
      setOptions(prevOptions => [...prevOptions, ...featuresCollection]);
      console.log(parkingData);
    }
  }, [parkingData]);

  const handleInputChange = (newValue: string) => {
    const obg = options.find(item => newValue.includes(item.name));

    if (obg) {
      let coords;

      if (obg.Point) {
        // Для данных с Point
        coords = obg.Point.pos
          .split(' ')
          .map((item: any) => Number(item))
          .reverse();
      } else if (obg.geometry) {
        // Для данных с geometry.coordinates
        coords = obg.geometry.coordinates
        console.log(coords);
      }

      if (coords) {
        setNewCoords(coords);
        console.log(coords);
        setZoom(18);
      }
    }

    setValue(newValue);
  };

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
