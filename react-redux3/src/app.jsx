import React from 'react'
import Hoge from './hoge'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Hoge param={1}/>
        <Hoge param={2}/>
        <Hoge param={3}/>
      </div>
    )
  }
}