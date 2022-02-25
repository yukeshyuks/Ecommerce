//useContext hook is used and it is imported from react
import React, { useContext } from "react";
import { GlobalState } from "../../ProductsAPI/GlobalState";
import { ProductItem } from "./ProductItem";

//material UI imports
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

//contains the styles of the curve at the bottom of the page
import "../../ProfileDash/Curve.css";

const Products = () => {
  const state = useContext(GlobalState);
  const [products] = state.productAPI.products;

  return (
    // Container component is imported from material UI
    <Container>
      {/* Grid component is imported from material UI*/}
      <Grid container spacing={2}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={8} md={6} lg={3}>
              <ProductItem key={product.id} product={product} />
            </Grid>
          );
        })}
      </Grid>

      <Grid container spacing={2}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={8} md={6} lg={3}>
              <ProductItem key={product.id} product={product} />
            </Grid>
          );
        })}
      </Grid>

      <Grid container spacing={2}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={8} md={6} lg={3}>
              <ProductItem key={product.id} product={product} />
            </Grid>
          );
        })}
      </Grid>

      {/* the styles of the class is present in "src/ProfileDash/Curve.css" */}
    </Container>
  );
};

export default Products;
