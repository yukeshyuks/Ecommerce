import React from "react";
import Navbar from "../component/NavBar/Navbar";
import MiniNavbar from "../component/CategoryBar/MiniNavbar";
import Recommend from "../component/Recommend/Recommend";
import Footer from "../component/Footer/Footer";
import Waves from "../component/Footer/Waves";
import Banner from "../component/Banner/Banner";

//Homepage contains the navbar, mininavbar, recommend and footer components
//It has the default route of './homepage'

const Homepage = () => {
  return (
    <div>
      {/* Navbar component is imported from the navbar.js present in "src/component/Navbar/Navbar.js" */}
      <Navbar />
      {/* MiniNavbar component is imported from the MiniNavbar.js present in "src/component/CategoryBar/MiniNavbar.js" */}
      <MiniNavbar />
      <Banner />
      <br />
      {/* products component is imported from the Products.js present in "src/component/Recommend/Products.js" */}
      <Recommend />
      {/* Footer component is imported from the Footer.js present in "src/component/Footer/Footer.js" */}
      <Waves />
      <Footer />
    </div>
  );
};

export default Homepage;
