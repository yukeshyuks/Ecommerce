import React from 'react';
import Navbar from "../Components/Navbar";
import PropCat from './PropCat';
import Footer from "../component/Footer/Footer";

//This page consists of header, PropCat file and Footer
//consists of the default route  '/propertySubcategory'
const PropCatPage = () => {
    return (
        <>


        {/* Navbar component is imported from the navbar.js present in "src/Components/Navbar.js"  */}

        <div><Navbar /></div>


        {/* PropCat component is imported from the PropCat.js present in "src/SubCat1/PropCat.js" */} 

        <div><PropCat /></div>

        
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


        {/* Footer component is imported from the Footer.js present in "src/component/Footer/Footer.js" */} 

        <div><Footer/></div>

        
        </>
        
    )
}

export default PropCatPage
