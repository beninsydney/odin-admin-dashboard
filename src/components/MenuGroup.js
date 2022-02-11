import { Component } from 'react'
import MenuLink from './MenuLink'

export default class MenuGroup extends Component {
  constructor (props) {
    super()
    this.state = {
      links: props.links
    }
  }

  render () {
    return (
      <menu style={{}}>
        {this.state.links.map(link => {
          return (
            <li>
              <MenuLink link={link} />
            </li>
          )
        })}
      </menu>
    )
  }
}
