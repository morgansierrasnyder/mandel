import * as React from 'react'
import { Link } from 'react-router-dom'

import Title from './Title'
import Thumbnail from './Thumbnail'

export default () => (
  <div>
    <Title>Mandelbrot Set</Title>
    <Thumbnail src="https://i.stack.imgur.com/nskqS.jpg" />
    <ul>
      <li>
        <Link to="/fractals/julia">Julia Set</Link>
      </li>
      <li>Mandelbulb</li>
      <li>Multibrot</li>
    </ul>
  </div>
)
