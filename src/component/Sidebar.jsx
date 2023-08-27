import React from 'react'
import home from '../image/home.svg'
import Services from '../image/Services.svg';
import Bookings from '../image/Bookings.svg';
import Queries from '../image/Queries.svg';
import Profile from '../image/Profile.svg';
import Invite from '../image/Invite.svg';
import Rewards from '../image/Rewards.svg';
import Logout from '../image/Logout.svg';
import DP from '../image/DP.svg';



const Sidebar = () => {
  return (
    <>
    <div className="sidebar">
        <ul>
        
            <li><a className="nav-link" href="/DP"><img src={DP} alt="DP" />Saurabh</a></li>
            <li><a className="nav-link" href="/Home"><img src={home} alt="home" /> Home</a></li>
            <li><a className="nav-link" href="/Bookings"><img src={Bookings} alt="Bookings" /> Bookings</a></li>
            <li><a className="nav-link" href="/Queries"><img src={Queries} alt="Queries" /> Queries</a></li>
            <hr />
            <li><a className="nav-link" href="/Schedules"><img src={Services} alt="Services" /> Schedules</a></li>
            <li><a className="nav-link" href="/Services"><img src={home} alt="home" /> Services</a></li>
            <hr />
            <li><a className="nav-link" href="/Profile"><img src={Profile} alt="Profile" /> Profile</a></li>
            <li><a className="nav-link" href="/Invite"><img src={Invite} alt="Invite" /> Invite & Earn</a></li>
            <li><a className="nav-link" href="/Rewards"><img src={Rewards} alt="Rewards" /> Rewards</a></li>
            <li><a className="nav-link" href="/Logout"><img src={Logout} alt="Logout" /> Logout</a></li>


        </ul>

    
    </div>
    
    </>
  )
}

export default Sidebar
