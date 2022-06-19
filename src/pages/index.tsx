import * as React from 'react'
import MainCanvas from '../components/three/MainCanvas'
import '../scss/index.scss'
import '@fontsource/lato'

// markup
const IndexPage = () => {
  return (
    <div id='canvas-container'>
      <MainCanvas />
    </div>
  )
}

export default IndexPage
