// @flow

import * as React from 'react'

import { BASE_PATH } from 'shared/config'
import { fullRoutes } from './utils'
import Routes from './routes'
import Components from './components'
import RenderRoutes from './RenderRoutes'

/**
 * (Dynamic, Recursively built) Router based on Routes and Components config
 *
 * Adding a Route:
 * 1. Add the Route's configuration to routes.js, including any nested routes as [children]
 * 2. Configure the Component (if any) to be rendered when the Route is matched in components.js,
 *    by adding a map entry with its key equal to Route.name, and value equal to the Component
 * 3. Abracadabra!
 *
 * This App uses React Router for routing!
 * Refer to the docs for more on <Route> and <Switch> components, and path matching:
 * https://reacttraining.com/react-router/web/guides/philosophy
 */

const ComponentRoutes = fullRoutes(Routes, Components)
const Router = () => <RenderRoutes routes={ComponentRoutes} path={BASE_PATH} />

export default Router
