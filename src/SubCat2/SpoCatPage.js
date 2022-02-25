import React from "react";
import Navbar from "../Components/Navbar";
import SpoCat from "./SpoCat";
import Footer from "../component/Footer/Footer";

//This Page contains Header , spocat.js and Footer
//consists of route of '/sportssubcategory'

const SpoCatPage = () => {
    return (
               
        <>

            {/* Navbar component is imported from the navbar.js present in "src/Components/Navbar.js"  */}

            <div><Navbar /></div>


            {/* SpoCat component is imported from the SpoCat.js present in "src/SubCat2/SpoCat.js" */} 

            <div><SpoCat /></div>


            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


            {/* Footer component is imported from the Footer.js present in "src/component/Footer/Footer.js" */} 

            <div><Footer /></div>
        </>
    )
}

export default SpoCatPage;
