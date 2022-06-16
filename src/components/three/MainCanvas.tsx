import React from 'react'
import { Canvas } from '@react-three/fiber'
import BoxGeometry from './BoxGeometry'

const MainCanvas = () => {
  return (
    <>
      <Canvas>
        <BoxGeometry />
        <ambientLight />
      </Canvas>
    </>
  )
}

export default MainCanvas
