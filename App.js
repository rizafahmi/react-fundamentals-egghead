import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {data: [
      {id: 1, name: "Eric Baily"},
      {id: 2, name: "Henrik Mickitarian"},
      {id: 3, name: "Zlatan Ibrahimovic"},
      {id: 4, name: "Paul Pogba"}
    ]}
  }

  render() {
    let rows = this.state.data.map( person => {
      return <PersonRow key={person.id} data={person} />
    })
    return <table>
      <tbody>{rows}</tbody>
      </table>
  }
}

const PersonRow = (props) => {
  return <tr>
    <td>{props.data.id}</td>
    <td>{props.data.name}</td>
    </tr>
}

ReactDOM.render(<App />, document.getElementById('app'))
