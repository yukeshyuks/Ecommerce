import React from "react";
import MiniNavbar from "../component/CategoryBar/MiniNavbar";
import Navbar from "../component/NavBar/Navbar";
import Footer from "../component/Footer/Footer";
import Products from "../component/Recommend/Products";
import "bootstrap/dist/css/bootstrap.css";

const Cycles = () => {
  return (
    <div>
        {/* Navbar component is imported from the navbar.js present in "src/component/Navbar/Navbar.js" */}
      <Navbar />
     
    {/* MiniNavbar component is imported from the MiniNavbar.js present in "src/component/CategoryBar/MiniNavbar.js" */}  
      <MiniNavbar />
    
    {/* products component is imported from the Products.js present in "src/component/Recommend/Products.js" */}
      <Products />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    
 {/* Footer component is imported from the Footer.js present in "src/component/Footer/Footer.js" */}
      <Footer />
    </div>
  );
};

export default Cycles;
