import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { app: { count } } = this.props.state

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <button onClick={ e => {this.props.dispatch({ type: 'INC' })} }>INC: { count }</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}

export default connect(mapStateToProps)(App)