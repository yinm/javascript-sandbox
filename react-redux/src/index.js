import React from 'react'

class AppComponents extends React.Component {
  send(e) {
    this.props.onClick(this.refs.inputText.value)
  }

  render() {
    return (
      <div>
        <input type="text" defaultValue="" ref="inputText" />
        <button onClick={this.send.bind(this)}>計算</button>
        <br />
        {this.props.price}
      </div>
    )
  }
}