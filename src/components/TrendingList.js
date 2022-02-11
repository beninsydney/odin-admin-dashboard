import { Component } from 'react'
import TrendingSummary from './TrendingSummary'

export default class TrendingList extends Component {
  constructor (props) {
    super()
    this.state = {
      trending: props.trending
    }
  }

  render () {
    return (
      <div class="trending">
        <h2>Trending</h2>
        <ul>
          {this.state.trending.map(trending => {
            return (
              <TrendingSummary trending={trending} />
            )
          })}
        </ul>
      </div>
    )
  }
}
