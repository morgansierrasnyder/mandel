import * as React from 'react'
import { upperCase} from 'lodash'
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Title from './Title'
import Thumbnail from './Thumbnail'

const Param = ({ match }) => (
  <div style={{ marginBottom: '24px', color: 'limegreen' }}>{upperCase(match.params.param)}</div>
)

export default () => (
  <div>
    <Title>Mandelbrot Set</Title>
    <Switch>
      <Route path="/fractals/mandelbrot/:param" component={Param} />
    </Switch>
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
