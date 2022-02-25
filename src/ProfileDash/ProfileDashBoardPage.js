import React from 'react'
import Navbar from '../Components/Navbar'
import ProfileDashboard from './ProfileDashboard'
import Footer from '../component/Footer/Footer'
//ProfileDashBoardPage contains the navbar,ProfileDashboard  and footer components
//It has the default route of './ProfileDashBoard'

function ProfileDashBoardPage() {
    return (
        <div>
                {/* Navbar component is imported from the navbar.js present in "src/Components/Navbar.js" */}

              <><div><Navbar /></div>


                {/* ProfileDashboard component is imported from the ProfileDashBoard.js present in "src/ProfileDash/ProfileDashboard.js" */}
              
              <div>< ProfileDashboard/></div>

              
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              

                {/* Footer component is imported from the Footer.js present in "src/component/Footer/Footer.js" */}
              
              <div><Footer /></div></>

        </div>
    )
}

export default ProfileDashBoardPage
