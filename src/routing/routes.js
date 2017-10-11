import React from 'react'
import { upperCase, startCase } from 'lodash'

import { pageNames, fullPaths } from './utils'
import Fractals from '../components/Fractals'
import Mandelbrot from '../components/Mandelbrot'
import Julia from '../components/Julia'
import Triangle from '../components/Triangle'
import Snowflake from '../components/Snowflake'
import Param from '../components/Param'
import Title from '../components/Title'

const components = {
  mandelbrot: Mandelbrot,
  julia: Julia,
  triangle: Triangle,
  snowflake: Snowflake
}

/**
 * Array of Routes:
 * * name:      (string) unique identifier
 * * path:      (string) base path, can be static - 'route-path' - or dynamic - ':route-path'
 * * title:     (function) that returns route title, given optional params
 * * exact:     (boolean) true if the route should only render given an exact path match
 * * children:  (array) nested routes
 * * component: (node) component to render when route is matched
 * *            (appended by Components config components.js, do not add components to this file)
 *
 * docs on path matching: https://reacttraining.com/react-router/web/api/match
 * inspired by curi.js and react-router-config
 */
const Routes = [
  {
    name: 'Fractals',
    path: 'fractals',
    component: Fractals,
    title: () => 'Fractals',
    children: [
      {
        name: 'Fractal',
        path: ':fractal',
        component: (props) => {
          console.log(props)
          const Fractal = components[props.match.params.fractal] || null
          return <Fractal />
        },
        title: ({ match }) => startCase(match.params.fractal)
      }
    ]
  }, {
    name: 'PageNotFound',
    path: '*',
    component: ({ route }) => <Title>{route.title()}</Title>,
    title: () => 'Uncharted Territory'
  }
]
export default Routes

export const Pages = pageNames(Routes)
export const Paths = fullPaths(Routes, "")
