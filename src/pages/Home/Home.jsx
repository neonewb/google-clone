import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AppIcon from '@material-ui/icons/Apps'
import { Avatar } from '@material-ui/core'
import Search from '../../components/Search'

function Home() {
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__headerLeft'>
          {/* <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link> */}
        </div>
        <div className='home__headerRight'>
          <Link to='/'>Gmail</Link>
          <Link to='/'>Images</Link>
          <AppIcon />
          <Avatar />
        </div>
      </div>

      <div className='home__body'>
          <img src='http://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='Google ;logo'/>
        <div className="home__inputContainer">
          <Search hideButtons = {false} home />
        </div>
      </div>
    </div>
  );
}

export default Home;
