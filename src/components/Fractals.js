import * as React from 'react'
import glamorous from 'glamorous'
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Title from './Title'
import Mandelbrot from './Mandelbrot'

const basepath = 'fractals'
export default () => (
  <div>
    <Title>Fractals</Title>
    <ul>
      <li>
        <Link to="/fractals/mandelbrot">Mandelbrot Set</Link>
      </li>
      <li>Julia Set</li>
      <li>Koch Snowflake</li>
      <li>Sierpinkski Triangle</li>
      <li>Mandelbulb</li>
    </ul>
    <Switch>
      <Route path="/fractals/mandelbrot" component={Mandelbrot} />
    </Switch>
  </div>
)
