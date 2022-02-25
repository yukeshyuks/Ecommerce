import React from 'react'


//material UI imports
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';


import '../component/Footer/footer.css'
//this file provides the footer for each page of the website
//Icons are imported from material-ui


function Footer() {
    return (
  
    //  BottomNavigation component is imported from the material UI 
        <BottomNavigation>
        
           {/* BottomNavigationAction component is imported from the material UI */}    
           <BottomNavigationAction className='Face' label="Facebook" icon={<FacebookIcon style={{fill: "#3b5998"}}/>}/>
           <BottomNavigationAction className='Face' label="Twitter" icon={<TwitterIcon style={{fill: "#1DA1F2"}}/>}/>
           <BottomNavigationAction className='Face' label="Instagram" icon={<InstagramIcon style={{fill: "#C13584"}}/>}/>
           <BottomNavigationAction className='Face' icon={<YouTubeIcon style={{fill: "#c4302b"}}/>}/>

        </BottomNavigation>

        
    )
}

export default Footer
