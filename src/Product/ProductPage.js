import React from 'react';
import Navbar from "../Components/Navbar";
import Product from "./Product"
import Footer from "../component/Footer/Footer";

//consists of header, Product.js and footer
//consists of route'/product'

const ProductPage = () => {
    return (


        //  Navbar component is imported from the navbar.js present in "src/Components/Navbar.js" 
        <><div><Navbar /></div>


        
         {/* Product component is imported from the Product.js present in "src/Product/Product.js" */}
        <div><Product /></div>
        
        <br/><br/><br/><br/><br/><br/>

        
        {/* Footer component is imported from the Footer.js present in "src/component/Footer/Footer.js" */}
        <div><Footer /></div></>
        
    )
}

export default ProductPage

