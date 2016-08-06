import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      txt: "This is txt State!"
    }
  }
  update(e) {
    this.setState({txt: e.target.value})
  }
  render() {
    let txt = this.state.txt
    let cat = this.props.cat
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)} />
        <h1>{cat} - {txt}</h1>
      </div>
    )
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
