import { Component } from 'react'
import Icon from '@mdi/react'
import { mdiMagnify, mdiBellOutline, mdiAccountBox} from '@mdi/js'
import avatarImage from '../avatar.jpg'

export default class Header extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <header className="header">
        <div class="upper">
          <form>
            <Icon path={mdiMagnify} />
            <input type="text" />
          </form>
          <button className="icon-button"><Icon path={mdiBellOutline} /></button>
          <button className="avatar-button">
            <span class="avatar-wrapper" style={{ backgroundImage: `url(${avatarImage})` }} />
            <span>Morgan Oakley</span>
          </button>
        </div>
        <div class="lower">
          <span class="avatar-wrapper" style={{ backgroundImage: `url(${avatarImage})` }} />
          <div class="welcome">
            <span>Hi there,</span>
            Morgan Oakley (@morgan)
          </div>
          <menu>
            <button>New</button>
            <button>Upload</button>
            <button>Share</button>
          </menu>
        </div>
      </header>
    )
  }
}
