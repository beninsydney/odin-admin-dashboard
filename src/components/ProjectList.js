import { Component } from 'react'
import ProjectSummary from './ProjectSummary'

export default class ProjectList extends Component {
  constructor (props) {
    super()
    this.state = {
      projects: props.projects
    }
  }

  render () {
    return (
      <div class="projects">
        <h2>Your Projects</h2>
        <ol>
          {this.state.projects.map(project => {
            return (
              <li>
                <ProjectSummary project={project} />
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}
