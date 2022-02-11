import { Component } from 'react'
import AnnouncementSummary from './AnnouncementSummary'

export default class AnnouncementList extends Component {
  constructor (props) {
    super()
    this.state = {
      announcements: props.announcements
    }
  }

  render () {
    return (
      <div class="announcements">
        <h2>Announcements</h2>
        <ol>
          {this.state.announcements.map(announcement => {
            return (
              <li>
                <AnnouncementSummary announcement={announcement} />
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}
