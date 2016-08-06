import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    let txt = this.props.txt
    let cat = this.props.cat
    return <h1>{cat} - {txt}</h1>
  }
}

App.defaultProps = {
  txt: "This is default text"
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

// Stateless function
// const App = () => <h1>Hello EggHead</h1>

ReactDOM.render(<App cat={1} />, document.getElementById('app'))
