import React from 'react'

import ReduxStoreTest from '../reduxStoreTest'

import './index.css'


class Main extends React.Component {
  render() {
    return (
      <div className="container Main">
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
        <footer className="text-center"><small>Boris Wong, 2018</small></footer>
      </div>
    )
  }
}

export default Main
