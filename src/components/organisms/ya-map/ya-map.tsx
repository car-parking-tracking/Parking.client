/* eslint-disable @typescript-eslint/no-explicit-any */
import { Map, YMaps, ZoomControl } from '@pbe/react-yandex-maps'
import { Wrapper } from './ya-map.styles'
import { mapConfig } from './ya-map.config'
import { ParkingCard } from '../parkingCard'
import { YAMAP_API_KEY } from '@constants/environment'
import { Portal } from '@components/atoms'
import { InputSearch } from '@components/molecules'
import { Manager } from '../manager'
import { useMapSlice } from '@app/store/slices/mapSlice'
import { AnyObject } from 'yup'

export const YaMap: React.FC = () => {
  const { portal, coords, zoom } = useMapSlice()

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
            center: coords,
            zoom: zoom,
          }}
          instanceRef={(ref: AnyObject) => {
            if (ref) {
              ref.setCenter(coords)
            }
          }}>
          <Manager />
          <ZoomControl options={{ position: { left: 32, top: 90 }, size: 'large' }} />
        </Map>
      </YMaps>
      {portal && (
        <Portal getHTMLElementId={'parking'}>
          <ParkingCard />
        </Portal>
      )}
    </Wrapper>
  )
}
