import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import Router from './router'

import configureStore from './store/configure-store'

import './styles.css'

const root = () => {
  const initialState = {}

  const store = configureStore(initialState)

  render(
    <Provider store={store}>
      <Router />
    </Provider>,
    document.getElementById('root')
  )
}

root()
