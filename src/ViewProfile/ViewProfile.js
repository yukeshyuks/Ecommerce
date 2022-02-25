import React from 'react';
import Navbar from '../Components/Navbar';
import ProfileScreen from '../Profile/ProfileScreen';
import Footer from '../component/Footer/Footer';

//This page contains header, ProfileScreen and Footer
//It contains the default route "/profile"

export default function ViewProfile() {
  return (
    <>
    
        {/* Navbar component is imported from the navbar.js present in "src/Components/Navbar.js" */}

        <div><Navbar /></div>




        {/* ProfileScreen component is imported from the ProfileScreen.js present in "src/Profile/ProfileScreen.js" */}

        <div><ProfileScreen /></div>


        

            
        {/* Footer component is imported from the Footer.js present in "src/component/Footer/Footer.js" */}
        
        <div><Footer /></div>


    </>
    
    
);
}
