import React from 'react'
import { OfficialPositionPropType } from '../../types/types'
import '../../scss/explanation-card.scss'

const ExplanationCard = (prop: OfficialPositionPropType) => {
  const { position, explanation, people } = prop

  return (
    <div className='explanation-card'>
      <p className='position'>{position}</p>
      <p className='explanation'>{explanation}</p>
      <p className='people'>{people}</p>
    </div>
  )
}

export default ExplanationCard
