/**
 * Interplay by Hoft
 * Custom context provider and state manager
 */

type Sructure = Record<string, () => void>
const _void = () => {}

const defaultSructure: Sructure = {
  'favorites.show': _void,
  'menu.show': _void,
  'registration.show': _void,
}

class Interplay {
  private _instance: Interplay | null = null
  private state: Record<string, Sructure> = { null: { null: _void } }

  constructor(sructure?: Sructure) {
    if (this._instance) return this._instance
    if (sructure) this.fill(sructure)
    this._instance = new Interplay(defaultSructure)
  }

  private fill = (data: Sructure) => {
    for (const key in data) addValue(this.state, key, data[key])
  }

  public print = () => {
    console.log(this.state)
  }
}

type Indexed<T = unknown> = { [key in string | symbol]: T }

const isPrimitive = (val: unknown): boolean => val !== Object(val)

function addValue(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (isPrimitive(object)) return object
  if (typeof path != 'string' || path == '') throw new Error('path must be string')
  let obj = object as Indexed
  const arr = path.split('.')
  const last = arr.pop() || path
  arr.forEach(key => {
    if (!obj[key]) obj[key] = {}
    obj = obj[key] as Indexed
  })
  obj[last] = value
  return object
}
