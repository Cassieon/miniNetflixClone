import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  return (
    <div className="navbar">
       <div className='container'>
            <div className='left'>
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="logo"/>
            </div>
            <span>Home</span>
            <span>TV Shows</span>
            <span>Movies</span>
            <span>News & Popular</span> 
            <span>My List</span>
            <div className='right'>
                <SearchIcon/>
                <span>KID</span>
                <span>DVD</span>
                <NotificationsActiveIcon/>
                <img src="https://pbs.twimg.com/media/DmtcXxYUcAYshhQ?format=jpg&name=240x240" alt="profile"/>
                <ArrowDropDownIcon/>
            </div>
       </div>
    </div>
  )
}

export default Navbar