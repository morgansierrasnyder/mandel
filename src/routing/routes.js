import React from 'react'
import { upperCase } from 'lodash'

import { pageNames, fullPaths } from './utils'
import Fractals from '../components/Fractals'
import Mandelbrot from '../components/Mandelbrot'
import Julia from '../components/Julia'
import Triangle from '../components/Triangle'
import Snowflake from '../components/Snowflake'
import Param from '../components/Param'
import Title from '../components/Title'

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
        name: 'Mandelbrot',
        path: 'mandelbrot',
        component: Mandelbrot,
        title: () => 'Mandelbrot Set',
        children: [
          {
            name: 'Param',
            path: ':param',
            component: Param,
            title: ({ match }) => upperCase(match.params.param)
          }
        ]
      }, {
        name: 'Julia',
        path: 'julia',
        component: Julia,
        title: () => 'Julia Set'
      }, {
        name: 'Triangle',
        path: 'triangle',
        component: Triangle,
        title: () => 'Sierpinski Triangle'
      }, {
        name: 'Snowflake',
        path: 'snowflake',
        component: Snowflake,
        title: () => 'Koch Snowflake'
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
