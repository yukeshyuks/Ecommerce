import { Link } from "react-router-dom";
import React from "react";
import "../component/MainPagesStyles/ProductDetails.css";
import Navbar from "../component/NavBar/Navbar";
import Footer from "../component/Footer/Footer";
import Waves from "../component/Footer/Waves";

//here the productDetails components consists of the navbar and the footer.
//It returns the product page with the product details
//It has image of the product and it price..etc..,

const ProductDetails = () => {
  return (
    <div>
      {/* Navbar component is imported from the navbar.js present in "src/component/Navbar/Navbar.js" */}
      <Navbar />
      {/* the styles of the page are present in "src/MainPagesStyles/ProductDetails.css" */}
      <div className="detail">
        <img
          src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1"
          alt="Product"
        />
        <div className="box-detail">
          <div className="row">
            <h2>Product 1</h2>
            <h5>Product Id: 19292</h5>
          </div>
          <div>
            <span>₹ 1500</span>
            <p>
              <b>Owner:</b> Tony Stark
            </p>
            <p>
              This phone has the latest features and updates.A15 Bionic chip.
              iPhone 13 Pro. 6.1-inch Super Retina XDR display with ProMotion
              for a faster, more responsive feel. Pro camera system (12MP
              Telephoto, Ultra Wide, Wide) A15 Bionic chip. iPhone 13 Pro Max.
              6.7-inch Super Retina XDR display with ProMotion for a faster,
              more responsive feel.
            </p>
            <p>
              <b>Contact Number:</b> 484848494{" "}
            </p>
            <Link to="/cart" className="cart">
              Rent now
            </Link>
          </div>
        </div>
      </div>
      {/* Footer component is imported from the Footer.js present in "src/component/Footer/Footer.js" */}
      <Waves />
      <Footer />
    </div>
  );
};

export default ProductDetails;
