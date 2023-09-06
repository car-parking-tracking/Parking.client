import placemark from '@assets/icons/placemark.svg'

export const managerConfig = {
  options: {
    clusterize: true,
    gridSize: 128,
  },
  objects: {
    iconLayout: 'default#image',
    iconImageSize: [26, 34],
    iconImageHref: placemark,
    hideIconOnBalloonOpen: false,
  },
  clusters: {
    preset: 'islands#blueClusterIcons',
  },
  modules: ['objectManager.addon.objectsBalloon'],
}
