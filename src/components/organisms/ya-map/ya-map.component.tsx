import { Map, YMaps } from '@pbe/react-yandex-maps'
import { Wrapper } from './ya-map.styles'
import { mapConfig } from './ya-map.config'

// TODO - подулючить ключ апи из переменных окружения
// const { YAMAP_API_KEY = '' } = process.env

export const YaMap: React.FC = () => {
  return (
    <Wrapper>
      <YMaps
        query={{
          apikey: '', // TODO использовать здесь YAMAP_API_KEY вместо ''
        }}>
        <Map {...mapConfig}>
          {/*
          // TODO здесь будут метки  
         */}
        </Map>
      </YMaps>
    </Wrapper>
  )
}
