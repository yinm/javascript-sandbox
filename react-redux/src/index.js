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