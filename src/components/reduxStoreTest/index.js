import React from 'react'
import { connect } from 'react-redux'

import actions from '../../redux/actions'


const mapStateToProps = (state) => ({
  nothing: state.nothing,
})

const mapDispatchToProps = ({
  setNothing: actions.setNothing,
})

class ReduxStoreTest extends React.Component {
  toggleTest() {
    this.props.setNothing(!this.props.nothing)
  }
  render() {
    return (
      <div className="ReduxStoreTest">
        <div>
          <button
            type="button"
            onClick={(e) => this.toggleTest()}>
            Toggle "nothing" Reducer
          </button>
        </div>
        <p>
        "nothing" reducer value: <b>{String(this.props.nothing)}</b>
        </p>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxStoreTest)
