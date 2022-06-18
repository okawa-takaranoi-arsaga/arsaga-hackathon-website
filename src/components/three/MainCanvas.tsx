import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import BoxGeometry from './BoxGeometry'
import { BOX_POSITIONS, OFFICIAL_POSITIONS } from '../../utils/constants'
import MainCamera from './MainCamera'
import ExplanationCard from '../card/ExplanationCard'
import { OfficialPositionPropType } from '../../types/types'

const MainCanvas = () => {
  const [position, setPosition] = useState<OfficialPositionPropType>()

  const sendBoxId = (id: number) => {
    setPosition(OFFICIAL_POSITIONS.find((position) => position.id === id))
  }

  return (
    <>
      {position ? (
        <ExplanationCard position={position.position} explanation={position.explanation} people={position.people} />
      ) : (
        <></>
      )}
      <Canvas>
        {BOX_POSITIONS.map((box) => (
          <BoxGeometry position={box.position} key={box.id} id={box.id} sendBoxId={sendBoxId} />
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
