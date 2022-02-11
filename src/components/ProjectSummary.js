import { mdiEyePlusOutline, mdiStarPlusOutline, mdiShareOutline } from '@mdi/js'
import Icon from '@mdi/react'
import { Component } from 'react'

export default class ProjectSummary extends Component {
  constructor (props) {
    super()
    this.state = {
      project: props.project
    }
  }

  render () {
    return (
      <div class="project">
        <h3>{this.state.project.title}</h3>
        <p>{this.state.project.description}</p>
        <menu>
          <button><Icon path={mdiStarPlusOutline} /></button>
          <button><Icon path={mdiEyePlusOutline} /></button>
          <button><Icon path={mdiShareOutline} /></button>
        </menu>
      </div>
    )
  }
}
