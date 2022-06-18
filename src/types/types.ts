import { Vector3Tuple } from 'three'

export type BoxPositionsType = {
  readonly id: number
  readonly position: Vector3Tuple
}

export type OfficialPositionsType = {
  readonly id: number
  readonly position: string
  readonly explanation: string
  readonly people: number
}

export type OfficialPositionPropType = Pick<OfficialPositionsType, 'position' | 'explanation' | 'people'>

export type BoxPositionsPropType = BoxPositionsType & {
  sendBoxId: (id: number) => void
}
