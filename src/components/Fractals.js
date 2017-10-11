import * as React from 'react'
import { Link } from 'react-router-dom'

import Title from './Title'

const basepath = 'fractals'
export default ({ route }) => (
  <div>
    <Title>Fractals</Title>
    <ul>
      <li>
        <Link to="/fractals/mandelbrot">Mandelbrot Set</Link>
      </li>
      <li>
        <Link to="/fractals/julia">Julia Set</Link>
      </li>
      <li>
        <Link to="/fractals/triangle">Sierpinski Triangle</Link>
      </li>
      <li>
        <Link to="/fractals/snowflake">Koch Snowflake</Link>
      </li>
      <li>Menger Sponge</li>
    </ul>
  </div>
)
