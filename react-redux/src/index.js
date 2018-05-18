import React from 'react'

class AppComponent extends React.Component {
  constructor() {
    super()
    this.send = this.send.bind(this)
  }

  send(e) {
    this.props.onclick(this.refs.inputText.value)
  }

  render() {
    return (
      <div>
        <input type="text" defaultValue="" ref="inputText" />
        <button onClick={this.send}>計算</button>
        <br />
        {this.props.price}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    price: state.price
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClick(price) {
      dispatch(addTax(price))
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

const ADDTAX = 'ADDTAX'
function addTax(price) {
  return {
    type: ADDTAX,
    price
  }
}

function addReducer(state, action) {
  switch (action.type) {
    case 'ADDTAX':
      return (
        Object.assign({}, state, {price: action.price * 1.08})
      )
    default:
      return state
  }
}