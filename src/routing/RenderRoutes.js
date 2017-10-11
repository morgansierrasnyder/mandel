// @flow

import * as React from 'react'
import { Route, Switch } from 'react-router'

const RenderRoutes = (
  { routes, path, others }: { routes: Array<Route>, path: string, others?: any }
) => (
  routes ? (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.name}
          exact={route.exact}
          path={`${path}/${route.path}`}
          render={props => (
            <div>
              { route.component &&
                <route.component {...props} {...others} route={route} path={`${path}/${route.path}`} /> }
              { route.children &&
                <RecurseRoute {...props} {...others} route={route} path={`${path}/${route.path}`} /> }
            </div>
          )}
        />
      ))}
    </Switch>
  ) : null
)

const RecurseRoute = ({ route, path, others }: { route: Route, path: string, others: any }) => (
  <RenderRoutes routes={route.children} path={path} {...others} />
)

export default RenderRoutes
