import React from 'react'
import { Provider } from 'react-redux'

import Store from './redux/store'

import './App.css'

import ReduxStoreTest from './components/reduxStoreTest'


class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="container App">
          <div className="jumbotron">
            <h3>node-react-redux-bootstrap-template</h3>
            <p>
              This is a personal node.js template for the node-react-redux-bootstrap stack.
            </p>
          </div>
          <div className="card">
            <div className="card-header">
              Redux Store Test
            </div>
            <div className="card-body">
              <ReduxStoreTest />
            </div>
          </div>
          <footer className="text-center"><small>Boris Wong, 2017</small></footer>
        </div>
      </Provider>
    )
  }
}

export default App
