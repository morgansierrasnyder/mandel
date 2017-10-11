import * as React from 'react'
import { Link } from 'react-router-dom'

import Title from './Title'
import Thumbnail from './Thumbnail'

export default () => (
  <div>
    <Title>Julia Set</Title>
    <Thumbnail src="https://i.ytimg.com/vi/2SvKH43FC9w/maxresdefault.jpg" />
    <ul>
      <li>
        <Link to="/fractals/mandelbrot">Mandelbrot Set</Link>
      </li>
      <li>Fatou Set</li>
      <li>Meromorphic Functions</li>
    </ul>
  </div>
)
