import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Icon from '@mdi/react'
import { mdiArrangeSendToBack } from '@mdi/js'
import Header from './components/Header';
import AnnouncementList from './components/AnnouncementList';
import ProjectList from './components/ProjectList';
import TrendingList from './components/TrendingList';
import MenuGroup from './components/MenuGroup';
import avatar from './avatar.jpg'
import avatar2 from './avatar2.jpg'
import avatar3 from './avatar3.jpg'
import avatar4 from './avatar4.jpg'

const linkGroup1 = [
  { text: 'Home', icon: 'mdiHome', url: '#' },
  { text: 'Profile', icon: 'mdiCardAccountDetailsOutline', url: '#' },
  { text: 'Messages', icon: 'mdiMessageReplyOutline', url: '#' },
  { text: 'History', icon: 'mdiClockTimeFiveOutline', url: '#' },
  { text: 'Tasks', icon: 'mdiBookmarkBoxMultipleOutline', url: '#' },
  { text: 'Communities', icon: 'mdiAccountMultiple', url: '#' }
]

const linkGroup2 = [
  { text: 'Settings', icon: 'mdiCog', url: '#' },
  { text: 'Support', icon: 'mdiHelpRhombusOutline', url: '#' },
  { text: 'Privacy', icon: 'mdiShieldCheckOutline', url: '#' }
]

const projects = [
  { title: "Super Cool Project", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab voluptate officiis, error eius dolores laudantium ducimus ipsum facilis hic quasi doloribus omnis amet minus illo commodi earum similique harum." },
  { title: "Super Cool Project", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab voluptate officiis, error eius dolores laudantium ducimus ipsum facilis hic quasi doloribus omnis amet minus illo commodi earum similique harum." },
  { title: "Super Cool Project", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab voluptate officiis, error eius dolores laudantium ducimus ipsum facilis hic quasi doloribus omnis amet minus illo commodi earum similique harum." },
  { title: "Super Cool Project", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab voluptate officiis, error eius dolores laudantium ducimus ipsum facilis hic quasi doloribus omnis amet minus illo commodi earum similique harum." },
  { title: "Super Cool Project", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab voluptate officiis, error eius dolores laudantium ducimus ipsum facilis hic quasi doloribus omnis amet minus illo commodi earum similique harum." },
  { title: "Super Cool Project", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab voluptate officiis, error eius dolores laudantium ducimus ipsum facilis hic quasi doloribus omnis amet minus illo commodi earum similique harum." },
  { title: "Super Cool Project", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab voluptate officiis, error eius dolores laudantium ducimus ipsum facilis hic quasi doloribus omnis amet minus illo commodi earum similique harum." },
  { title: "Super Cool Project", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab voluptate officiis, error eius dolores laudantium ducimus ipsum facilis hic quasi doloribus omnis amet minus illo commodi earum similique harum." },
  { title: "Super Cool Project", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab voluptate officiis, error eius dolores laudantium ducimus ipsum facilis hic quasi doloribus omnis amet minus illo commodi earum similique harum." },
  { title: "Super Cool Project", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab voluptate officiis, error eius dolores laudantium ducimus ipsum facilis hic quasi doloribus omnis amet minus illo commodi earum similique harum." }
]

const announcements = [
  { title: "Announcement", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab voluptate officiis, error eius dolores laudantium ducimus ipsum facilis hic quasi doloribus omnis amet minus illo commodi earum similique harum." },
  { title: "Community Share Day", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab voluptate officiis, error eius dolores laudantium ducimus ipsum facilis hic quasi doloribus omnis amet minus illo commodi earum similique harum." },
  { title: "Updated Privacy Policy", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab voluptate officiis, error eius dolores laudantium ducimus ipsum facilis hic quasi doloribus omnis amet minus illo commodi earum similique harum." }
]

const trending = [
  { avatar: avatar2, username: '@tegan', project: 'World Peace Builder' },
  { avatar, username: '@morgan', project: 'Super Cool Project' },
  { avatar: avatar3, username: '@kendall', project: 'Life Changing App' },
  { avatar: avatar4, username: '@alex', project: 'No Traffic Maker' }
]

ReactDOM.render(
  <React.StrictMode>
    <div class="sidebar">
      <div class="logo">
        <Icon path={mdiArrangeSendToBack} />
        Dashboard
      </div>
      <MenuGroup links={linkGroup1} />
      <MenuGroup links={linkGroup2} />
    </div>
    <div class="container">
      <Header />
      <div class="content">
        <ProjectList projects={projects} />
        <div class="sidecontent">
          <AnnouncementList announcements={announcements} />
          <TrendingList trending={trending} />
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
