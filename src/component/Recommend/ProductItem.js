import React from 'react'

//imports from material UI
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import {Link} from 'react-router-dom';

export const ProductItem = (product) => {

  return (
    //  Nav component is imported from the react-router-dom 
      <Link to="/productDetails"  style={{ textDecoration: 'none' }}>
      <>
    {/* card component is imported from the material Ui */}
      <Card sx={{ maxWidth: 345 }}>
        {/* passing the props to the cardmedia  */}

    {/* CardMedia component is imported from material UI */}
        <CardMedia
          component="img"
          height="175"
          image={product.product.get_image}
        />
 
      {/* CardContent component is imported from the material UI */}
        <CardContent>
       
    {/* Typography is imported from material UI */}
        <Typography gutterBottom variant="h4" component="div">
            {product.product.name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {product.product.description}
          </Typography>

          <Typography gutterBottom variant="h5" component="div">
            {product.product.price}
          </Typography>
        </CardContent>
      </Card>
    </>
  </Link>
  )
}
