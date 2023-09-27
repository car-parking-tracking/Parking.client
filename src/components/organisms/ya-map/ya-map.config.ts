export const mapConfig = {
  width: '100%',
  height: '100%',
  defaultState: {
    controls: [],
    center: [55.751774, 37.61838],
    zoom: 16,
  },
  options: {
    yandexMapDisablePoiInteractivity: true,
    maxAnimationZoomDifference: 5,
    suppressMapOpenBlock: true,
    avoidFractionalZoom: false,
    restrictMapArea: [
      [56.065309, 37.10394],
      [55.352992, 38.475325],
    ],
    balloonPanelMaxMapArea: 562500,
  },

  modules: [],
}
