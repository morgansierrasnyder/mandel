import * as React from 'react'
import { Link } from 'react-router-dom'

import Title from './Title'
import Thumbnail from './Thumbnail'

export default () => (
  <div>
    <Title>Koch Snowflake</Title>
    <Thumbnail src="https://i.pinimg.com/564x/a5/42/70/a542701d131ed521e7a2527d4c1e4ae6--fractal-patterns-koch.jpg" />
    <ul>
      <li>Cesaro Fractal</li>
      <li>Osgood Curve</li>
      <li>Gosper Curve</li>
    </ul>
  </div>
)
