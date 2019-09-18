import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react'
import { render } from 'react-dom'
import Page from './components/page'

const renderApp = () => {
  const target = document.querySelector('#cv')
  render(<Page />, target)
}

renderApp()
