import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import { Mesh } from 'three'
import { BoxPositionsPropType } from '../../types/types'

const BoxGeometry = (props: BoxPositionsPropType) => {
  const { id, position, sendBoxId, scale } = props
  const [hovered, setHovered] = useState(false)

  const mesh = useRef<Mesh>()
  // Box拡大サイズの調整
  const scaleLimit = scale / 2

  const onPointerOver = () => {
    sendBoxId(id)
    setHovered(true)
  }

  const onPointerLeave = () => {
    setHovered(false)
  }

  useEffect(() => {
    if (!mesh.current) return
    // 初期BOXサイズを0に設定
    mesh.current.scale.x = 2
    mesh.current.scale.y = 0
    mesh.current.scale.z = 1.2
  }, [])

  // Boxアニメーション
  useFrame(() => {
    if (!mesh.current || mesh.current.scale.y >= scaleLimit) return
    mesh.current.scale.y += 0.1
    mesh.current.position.y += 0.05
  })

  return (
    <mesh ref={mesh} position={position} onPointerOver={onPointerOver} onPointerLeave={onPointerLeave}>
      <boxGeometry />
      <meshStandardMaterial color={hovered ? '#DE68AB' : 'orange'} />
    </mesh>
  )
}

export default BoxGeometry
