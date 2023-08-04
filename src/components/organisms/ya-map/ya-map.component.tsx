import { useEffect, useState } from 'react'
import { IEvent } from 'yandex-maps'

import { Wrapper } from './ya-map.styles'
import { managerConfig, mapConfig } from './ya-map.config'
import { ParkingCard } from '../parkingCard'
import { YAMAP_API_KEY } from '@constants/environment'
import { Portal } from '@components/atoms'
import placemark from '@assets/icons/placemark.svg'
import placemarkActive from '@assets/icons/placemarkActive.svg'
import { YMaps, Map, ObjectManager } from '@pbe/react-yandex-maps'
import { AnyObject } from '@pbe/react-yandex-maps/typings/util/typing'

export const YaMap: React.FC = () => {
  const [activePortal, setActivePortal] = useState<boolean>(false)
  const [manager, setManager] = useState<AnyObject>()

  const handleOpenBalloon = (e: IEvent) => {
    manager?.objects.setObjectOptions(e.get('objectId'), {
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

  return (
    <Wrapper>
      <YMaps
        query={{
          apikey: YAMAP_API_KEY,
        }}
        version={'2.1.79'}>
        <Map {...mapConfig}>
          <ObjectManager {...managerConfig} instanceRef={(ref: AnyObject) => setManager(ref)} />
          {activePortal && (
            <Portal getHTMLElementId={'parking'}>
              <ParkingCard />
            </Portal>
          )}
        </Map>
      </YMaps>
    </Wrapper>
  )
}
