import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../app/Home/containers'
import Detail from '../app/Detail/containers'
import Edit from '../app/Detail/containers/Edit'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detalhe/:id" component={Detail} />
      <Route path="/detalhe/:id/editar" component={Edit} />
      <Route path="*" component={Home} />
    </Switch>
  )
}

export default Routes
