import * as React from 'react'
import { Switch, Route, RouteProps } from 'react-router-dom'
import Loading from '../components/loading'

const { lazy, Suspense } = React

const Banner = lazy(() => {
  return import(/* webpackChunkName:"banner" */ '../components/banner')
})

const Home = lazy(() => {
  return import(/* webpackChunkName:"home" */ '../components/home')
})

const routes: RouteProps[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/home',
    component: Home,
    exact: true,
  },
  {
    path: '/banner',
    component: Banner,
    exact: true,
  },
]

const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {
          routes.map(route => {
            const {path, exact, component: LazyComponent} = route
            return (
              <Route key={`${path}`} exact={exact} path={path} render={(props) => <LazyComponent {...props} />}>
              </Route>
            )
          })
        }
      </Switch>
    </Suspense>
  )
}

export default Routes
