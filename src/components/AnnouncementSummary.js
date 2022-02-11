import { Component } from 'react'

export default class AnnouncementSummary extends Component {
  constructor (props) {
    super()
    this.state = {
      announcement: props.announcement
    }
  }

  render () {
    return (
      <div>
        <h3>{this.state.announcement.title}</h3>
        <p>{this.state.announcement.description}</p>
      </div>
    )
  }
}
