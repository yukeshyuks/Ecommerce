import React from "react";
import Navbar from "../Components/Navbar";
import BikeCat from "./BikeCat";
import Footer from "../component/Footer/Footer";

//This page consists of header,BikeCat.js and Footer
//consist of route '/bikessubcategory'

const BikeCatPage = () => {
    return (
        <>


            {/* Navbar component is imported from the navbar.js present in "src/Components/Navbar.js"  */}

            <div><Navbar /></div>


            {/* BikeCat component is imported from the BikeCat.js present in "src/SubCat3/Footer.js" */}

            <div><BikeCat /></div>


            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


            {/* Footer component is imported from the Footer.js present in "src/component/Footer/Footer.js" */}

            <div><Footer /></div>


        </>
    )
}

export default BikeCatPage;
