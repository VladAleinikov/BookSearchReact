import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import routes from '../router/router'
const AppRouter = () => {
      return (
            <div>
                  {routes.map(route =>
                        <Route component={route.component} path={route.path} exact={route.exact} key={route.path} />
                  )}
                  <Redirect to={'/main'} />
            </div>
      )
}

export default AppRouter