import * as React from 'react'
import glamorous from 'glamorous'
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Title from './Title'
import Mandelbrot from './Mandelbrot'
import Julia from './Julia'
import Triangle from './Triangle'
import Snowflake from './Snowflake'

const basepath = 'fractals'
export default () => (
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

    <Switch>
      <Route path="/fractals/mandelbrot" component={Mandelbrot} />
      <Route path="/fractals/julia" component={Julia} />
      <Route path="/fractals/triangle" component={Triangle} />
      <Route path="/fractals/snowflake" component={Snowflake} />
    </Switch>
  </div>
)
