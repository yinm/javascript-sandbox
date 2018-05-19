import React from 'react'
import { connect } from 'react-redux'

import App from '../component/app'

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)