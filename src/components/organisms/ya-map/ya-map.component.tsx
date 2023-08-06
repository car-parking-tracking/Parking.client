/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import { Map, YMaps } from '@pbe/react-yandex-maps'

import { Wrapper } from './ya-map.styles'
import { managerConfig, mapConfig } from './ya-map.config'
import { ParkingCard } from '../parkingCard'
import { YAMAP_API_KEY } from '@constants/environment'
import { Portal } from '@components/atoms'
import placemark from '@assets/icons/placemark.svg'
import placemarkActive from '@assets/icons/placemarkActive.svg'
import { YMaps, Map, ObjectManager } from '@pbe/react-yandex-maps'
import { AnyObject } from '@pbe/react-yandex-maps/typings/util/typing'

import { InputSearch } from '../../molecules'

const API_KEY = "d37743d4-8576-4f45-a4a1-3e794a0a3d10"


export const YaMap: React.FC = () => {

  const [newCoords, setNewCoords] = useState([
    55.75177425008563, 37.618380908341514
  ]);
  const [value, setValue] = useState("");
  const [options, setOptions] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        if (value) {
          const res = await fetch(
            `https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY}&geocode=Москва, улица ${value}&ll=37.622504,55.753215&spn=1.5,1.5&format=json`
          );
          const data = await res.json();
          const collection = data.response.GeoObjectCollection.featureMember.map(
            (item: any) => item.GeoObject
          );
          setOptions(() => collection);
          console.log(collection);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [value]);

  const handleInputChange = (newValue: string) => {
    const obg = options.find(
      (item) =>
        newValue.includes(item.name) &&
        newValue.includes(item.description)
    );
    if (obg) {
      const coords = obg.Point.pos
        .split(" ")
        .map((item: any) => Number(item))
        .reverse();
      setNewCoords(coords);
    }
    setValue(newValue);
  };

  return (
    <Wrapper>
      <YMaps
        query={{
          load: "package.full",
          apikey: API_KEY
        }}>
        <InputSearch
          options={options}
          onSearchChange={handleInputChange} />
        <Map
          {...mapConfig}
          state={{
            ...mapConfig.defaultState,
            center: newCoords
          }}
        >
        </Map>
      </YMaps>
    </Wrapper >
  )
}
