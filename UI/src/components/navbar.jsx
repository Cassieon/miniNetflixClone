import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react'; 


const Navbar = () => {

  const [isScrolled,setScrolled] = useState(false); 

  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };


  return (
    <div className= {isScrolled ? "navbar scrolled ": "navbar"}>
       <div className='container'>
            <div className='left'>
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="logo"/>
            <span>Home</span>
            <span>TV Shows</span>
            <span>Movies</span>
            <span>News & Popular</span> 
            <span>My List</span>
            </div>
            <div className='right'>
                <SearchIcon className='icon'/>
                  <span>KID</span>
                  <span>DVD</span>
                <NotificationsActiveIcon className='icon'/>
                  <img src="https://pbs.twimg.com/media/DmtcXxYUcAYshhQ?format=jpg&name=240x240" alt="profile"/>
                <div className='profile'>
                <ArrowDropDownIcon className='icon'/>
                  <div className='options'>
                    <span>Settings</span>
                    <span>Logout</span>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Navbar