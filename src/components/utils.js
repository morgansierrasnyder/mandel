// @flow

import { omit, reduce } from 'lodash'

/**
 * Returns routes array with `component` attribute appended to each Route object
 */
export const fullRoutes = (routes: Array<Route> = [], components: Object): Array<Route> => (
  routes.reduce(
    (res, route) => {
      const component = components[route.name]
      return res.concat(Object.assign(
        route,
        (component ? { component } : {}),
        (route.children ? { children: fullRoutes(route.children, components) } : {})
      ))
    },
    []
  )
)

/**
 * Returns a map of route.name => route
 */
export const pageNames = (routes: Array<Route> = []): { [key: string]: Route } => (
  routes.reduce(
    (res, route) => Object.assign(
      res,
      { [route.name]: omit(route, 'children') },
      pageNames(route.children)
    ),
    {}
  )
)

/**
 * Returns a map of route.name => full_path
 */
export const fullPaths = (routes: Array<Route> = [], path: string = ''): { [key: string]: string } => (
  routes.reduce(
    (res, route) => {
      const fullpath = `${path}/${route.path}`
      return Object.assign(
        res,
        { [route.name]: fullpath },
        fullPaths(route.children, fullpath)
      )
    },
    {}
  )
)

/**
 * Returns the last portion of a path (think Unix basename)
 */
export const basePath = (path: string) => (
  path.substring(path.lastIndexOf('/') + 1)
)

/**
 * Returns the first portion of a path after the basepath
 */
export const rootPath = (path: string, basepath: string) => {
  const relPath = path.substring(path.indexOf(`${basepath}/`) + basepath.length + 1)
  return relPath.indexOf('/') > -1 ? relPath.substring(0, relPath.indexOf('/')) : relPath
}

/**
 * Convert a route's path to an absolute url for linking
 */
export const pathToUrl = (path: string, params: Object = {}): string => (
  reduce(
    params,
    (res, val, key) => {
      const found = res.indexOf(`:${key}`)
      if (found > -1) {
        const target = rootPath(res, res.substring(0, found))
        return res.replace(target, val ? val.toString() : '')
      }
      return res
    },
    path
  )
)
