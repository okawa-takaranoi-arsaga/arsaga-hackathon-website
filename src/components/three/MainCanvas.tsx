import React from 'react'
import { Canvas } from '@react-three/fiber'
import BoxGeometry from './BoxGeometry'
import { BoxPositions } from '../../modules/BoxPositions'
import MainCamera from './MainCamera'

const MainCanvas = () => {
  return (
    <>
      <Canvas>
        {BoxPositions.map((data, index) => (
          <BoxGeometry position={data} key={index} />
        ))}
        <MainCamera />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} />
        <pointLight position={[10, 10, 0]} />
      </Canvas>
    </>
  )
}

export default MainCanvas
