import { features } from '@mocks/features'
import placemark from '@assets/icons/placemark.svg'

export const mapConfig = {
  width: '100%',
  height: '100%',
  defaultState: {
    center: [55.7482634, 37.6618718],
    zoom: 16,
    controls: ['zoomControl'],
  },
  options: {
    yandexMapDisablePoiInteractivity: true,
  },
  modules: ['control.ZoomControl'],
}

export const managerConfig = {
  options: {
    clusterize: true,
    gridSize: 256,
  },
  objects: {
    iconLayout: 'default#image',
    iconImageSize: [26, 34],
    iconImageHref: placemark,
    hideIconOnBalloonOpen: false,
  },
  defaultFeatures: JSON.stringify(features),
  clusters: {
    preset: 'islands#blueClusterIcons',
  },
  modules: ['objectManager.addon.objectsBalloon'],
}
