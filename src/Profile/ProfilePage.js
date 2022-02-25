import React from 'react'
import Navbar from '../Components/Navbar'
import Profile from './Profile'
import Footer from '../component/Footer/Footer'

//This page contains header, Profile and Footer
//It contains the default route "/profile"

const ProfilePage = ()  => {
    return (

       


        <>

         {/* Navbar component is imported from the navbar.js present in "src/Components/Navbar.js"  */}
        
        <div><Navbar /></div>
        
        
        {/* Profile component is imported from the Profile.js present in "src/Profile/Profile.js" */}
        
        <div><Profile /></div>


        
        {/* Footer component is imported from the Footer.js present in "src/component/Footer/Footer.js" */}        
        
        <div><Footer /></div>
        
        
        </>
        
        
    )
}

export default ProfilePage;
