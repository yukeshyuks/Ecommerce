import React from "react";
import Navbar from "../Components/Navbar";
import FunCat from "./FunCat";
import Footer from "../component/Footer/Footer";

//This page consists of header , FunCat.js and footer
//consists of route '/functionssubcategory'

const FunCatPage = () => {
    return (
        <>

            {/* Navbar component is imported from the navbar.js present in "src/Components/Navbar.js"  */}

            <div><Navbar /></div>


            {/* FunCat component is imported from the FunCat.js present in "src/SubCat4/Fun.js" */}

            <div><FunCat /></div>


            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


            {/* Footer component is imported from the Footer.js present in "src/component/Footer/Footer.js" */}
            
            <div><Footer /></div>
        </>
    )
}

export default FunCatPage;
