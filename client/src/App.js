import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './containers'
import './App.scss'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>  
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  )
}
