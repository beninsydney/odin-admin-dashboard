import { Component } from 'react'

export default class TrendingSummary extends Component {
  constructor (props) {
    super()
    this.state = {
      trending: props.trending
    }
  }

  render () {
    return (
      <div className="trending-item">
        <span className="avatar-wrapper" style={{ backgroundImage: `url(${this.state.trending.avatar})` }} />
        <div className="information">
          <span class="user">{this.state.trending.username}</span>
          <span className="project">{this.state.trending.project}</span>
        </div>
      </div>
    )
  }
}
