// import 'dotenv/config'

import { Map, YMaps } from '@pbe/react-yandex-maps'
import { Wrapper } from './ya-map.styles'
import { mapConfig } from './ya-map.config'

// const { YAMAP_API_KEY = '' } = process.env

export const YaMap: React.FC = () => {
  return (
    <Wrapper>
      <YMaps
        query={{
          apikey: '',
        }}>
        <Map {...mapConfig}></Map>
      </YMaps>
    </Wrapper>
  )
}
