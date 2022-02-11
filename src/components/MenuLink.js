import { Component } from 'react'
import Icon from '@mdi/react'
import * as icons from '@mdi/js'

export default class MenuLink extends Component {
  constructor (props) {
    super()
    this.state = {
      link: props.link
    }
  }

  render () {
    return (
      <a href={this.state.link.url}>
        <Icon path={icons[this.state.link.icon]} />
        {this.state.link.text}
      </a>
    )
  }
}
