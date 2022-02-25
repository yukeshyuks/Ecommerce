import React from 'react'
import Navbar from '../NavBar/Navbar'
import Recommend from './Recommend'
import Footer from '../Footer/Footer'

const Myads = () => {
    return (
        <><div>
      {/* Navbar component is imported from the navbar.js present in "src/Component/Navbar/Navbar.js" */}
            <Navbar />
        </div><div>
     {/* Recommend component is imported from the navbar.js present in "src/Components/Recommend/Recommend.js" */}
                <Recommend />
            </div><div>
      {/* Footerr component is imported from the navbar.js present in "src/Component/Footer/Footer.js" */}
                <Footer />
            </div></>
    )
}

export default Myads;
