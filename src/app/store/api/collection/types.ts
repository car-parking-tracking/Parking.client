export type IFeatureItemGeometry = {
  type: string
  coordinates: Array<number>
}

export type IFeatureItem = {
  type: string
  id: number
  geometry: IFeatureItemGeometry
  properties: Record<string, string>
}

export type IFeatureCollection = {
  type: string
  features: IFeatureItem[]
}
