import React, {Component} from 'react'
import Selector from './components/Selector';
import { ReactDOM } from "react-dom";

export default class extends Component {
  render() {
    return <div>
      <h1>Make some change</h1>
      
      <h2>Welcome to React components</h2>
      <Selector />
    </div>
  }
}

ReactDOM.render(<MainCompoent />, document.getElementById ('root'));