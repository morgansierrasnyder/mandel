// @flow

import Fractals from '../components/Fractals'
import Mandelbrot from '../components/Mandelbrot'
import Julia from '../components/Julia'
import Triangle from '../components/Triangle'
import Snowflake from '../components/Snowflake'
import Param from '../components/Param'

/**
 * Map of Routes to Components
 * Indicates what component (if any) should render, given a Route.name
 *
 * { Route.name: Component }
 */
const Components = {
  Fractals,
  Mandelbrot,
  Julia,
  Triangle,
  Snowflake,
  Param
}

export default Components
