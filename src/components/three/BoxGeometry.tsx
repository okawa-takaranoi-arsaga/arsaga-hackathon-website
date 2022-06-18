import React, { useState } from 'react'
import { BoxPositionsPropType } from '../../types/types'

const BoxGeometry = (props: BoxPositionsPropType) => {
  const { id, position, sendBoxId } = props
  const [hovered, setHovered] = useState(false)

  return (
    <mesh
      position={position}
      onPointerOver={() => {
        sendBoxId(id)
        setHovered(true)
      }}
      onPointerLeave={() => {
        setHovered(false)
      }}
    >
      <boxGeometry />
      <meshStandardMaterial color={hovered ? 'pink' : 'orange'} />
    </mesh>
  )
}

export default BoxGeometry
