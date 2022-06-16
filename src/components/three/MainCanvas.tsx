import React from 'react'
import { Canvas } from '@react-three/fiber'
import BoxGeometry from './BoxGeometry'
import { BoxPositions } from '../../modules/BoxPositions'

const MainCanvas = () => {
  return (
    <>
      <Canvas>
        {BoxPositions.map((data, index) => (
          <BoxGeometry position={data} key={index} />
        ))}
        <ambientLight />
      </Canvas>
    </>
  )
}

export default MainCanvas
