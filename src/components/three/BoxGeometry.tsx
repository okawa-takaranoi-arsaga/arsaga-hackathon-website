import React, { useState } from 'react'
import { BoxPositionsPropType } from '../../types/types'

const BoxGeometry = (props: BoxPositionsPropType) => {
  const { id, position, sendBoxId } = props
  const [hovered, setHovered] = useState(false)

  const onPointerOver = () => {
    sendBoxId(id)
    setHovered(true)
  }

  const onPointerLeave = () => {
    setHovered(false)
  }

  return (
    <mesh position={position} onPointerOver={onPointerOver} onPointerLeave={onPointerLeave}>
      <boxGeometry />
      <meshStandardMaterial color={hovered ? 'pink' : 'orange'} />
    </mesh>
  )
}

export default BoxGeometry
