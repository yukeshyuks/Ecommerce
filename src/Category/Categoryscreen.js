import React from "react";
import Navbar from "../Components/Navbar";
import Category from "./category";
import Footer from "../component/Footer/Footer";
// This page consist of header , Category.js and footer
// consists of the route '/category'

const Categoryscreen = () => {
    return (


        //  Navbar component is imported from the navbar.js present in "src/Components/Navbar.js" 
        <><div><Navbar /></div>


         {/* Category component is imported from the Category.js present in "src/Category/Category.js"  */}
        <div><Category /></div>


        {/* Footer component is imported from the Footer.js present in "src/component/Footer/Footer.js"  */}
        <div><Footer /></div></>

        
    )
}

export default Categoryscreen;
