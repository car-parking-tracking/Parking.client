/* eslint-disable @typescript-eslint/no-explicit-any */
import { Map, YMaps, ZoomControl } from '@pbe/react-yandex-maps'
import { Wrapper } from './ya-map.styles'
import { mapConfig } from './ya-map.config'
import { ParkingCard } from '../parkingCard'
import { YAMAP_API_KEY } from '@constants/environment'
import { Portal } from '@components/atoms'
import { InputSearch } from '@components/molecules'
import { useFetchLotByIdQuery } from '@app/store/api'
import { Manager } from '../manager'
import { useSelector } from 'react-redux'
import { RootState } from '@app/store/store'

export const YaMap: React.FC = () => {
  const map = useSelector((state: RootState) => state.map)

  const { data: lotData } = useFetchLotByIdQuery(map.id, {
    skip: !map.id || map.id === 0,
  })

  return (
    <Wrapper>
      <YMaps
        version="2.1.79"
        query={{
          apikey: YAMAP_API_KEY,
          load: 'package.full',
        }}>
        <InputSearch />
        <Map
          {...mapConfig}
          state={{
            ...mapConfig.defaultState,
            center: map.coords,
            zoom: map.zoom,
          }}>
          <Manager />
          <ZoomControl options={{ position: { left: 32, top: 90 }, size: 'large' }} />
        </Map>
      </YMaps>
      {map.portal && (
        <Portal getHTMLElementId={'parking'}>
          {lotData && (
            <ParkingCard
              id={lotData.id || 0}
              address={lotData.address || 'Нет данных'}
              carCapacity={lotData.car_capacity || 'Нет данных'}
              tariffs={lotData.tariffs}
            />
          )}
        </Portal>
      )}
    </Wrapper>
  )
}
