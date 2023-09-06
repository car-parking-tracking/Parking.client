/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, Dispatch, SetStateAction } from 'react'
import { ObjectManager } from '@pbe/react-yandex-maps'
import { IEvent } from 'yandex-maps'
import { managerConfig } from './manager.config'
import placemark from '@assets/icons/placemark.svg'
import placemarkActive from '@assets/icons/placemarkActive.svg'
import { AnyObject } from '@pbe/react-yandex-maps/typings/util/typing'
import { useFetchFeatureCollectionQuery } from '@app/store/api'
import { useAppDispatch } from '@app/hooks/redux'
import { setPortal } from '@app/store/slices/mapSlice'

type ManagerProps = {
  setParkingIdCallback: Dispatch<SetStateAction<number | null>>
}

export const Manager: FC<ManagerProps> = ({ setParkingIdCallback }) => {
  const dispatch = useAppDispatch()
  const { data } = useFetchFeatureCollectionQuery()

  const handleOpenBalloon = (e: IEvent) => {
    const parkingID = e.get('objectId')
    if (typeof parkingID !== 'number') return

    setParkingIdCallback(parkingID)

    e.get('target').getOwner().setObjectOptions(parkingID, {
      iconImageHref: placemarkActive,
    })

    dispatch(setPortal(true))
  }

  const handleCloseBalloon = (e: IEvent) => {
    const parkingID = e.get('objectId')

    e.get('target').getOwner().setObjectOptions(parkingID, {
      iconImageHref: placemark,
    })

    dispatch(setPortal(false))
  }

  if (data) {
    return (
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
    )
  }
}
