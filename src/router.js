import React from 'react'
import { Router as ReachRouter } from '@reach/router'

import App from './App'
import Login from './views/login'

const Router = () => (
    <ReachRouter>
      <Login path="/" />
      <App path="/" />
    </ReachRouter>
  )

  export default Router
