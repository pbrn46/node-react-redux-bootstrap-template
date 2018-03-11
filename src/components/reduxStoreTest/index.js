import React from 'react'
import { connect } from 'react-redux'

import actions from '../../redux/actions'


const mapStateToProps = (state) => ({
  test: state.test,
})

const mapDispatchToProps = ({
  setTest: actions.setTest,
})

class ReduxStoreTest extends React.Component {
  toggleTest() {
    this.props.setTest(!this.props.test)
  }
  render() {
    return (
      <div className="ReduxStoreTest">
        <div>
          <button
            type="button"
            onClick={(e) => this.toggleTest()}>
            Toggle "test" Reducer
          </button>
        </div>
        <p>
        "test" reducer value: <b>{String(this.props.test)}</b>
        </p>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxStoreTest)
