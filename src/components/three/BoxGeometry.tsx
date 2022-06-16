import React from 'react'
import { Vector3Tuple } from 'three'

type Props = {
  position: Vector3Tuple
}

const BoxGeometry = (props: Props) => {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshStandardMaterial color='orange' />
    </mesh>
  )
}

export default BoxGeometry
