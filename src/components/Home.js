import * as React from 'react'
import { Route } from 'react-router'
import glamorous from 'glamorous'

import Title from './Title'

const Home = () => (
  <div>
    <Title>Fractals</Title>
    <ul>
      <li>Mandelbrot Set</li>
      <li>Julia Set</li>
      <li>Koch Snowflake</li>
      <li>Sierpinkski Triangle</li>
      <li>Mandelbulb</li>
    </ul>
  </div>
)

export default Home
