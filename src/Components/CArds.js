import * as React from "react";

//imports from material UI
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

//This page is used to view the products in form of cards in the screen of 'myads.js'
//This page uses icons from material-ui

const CArds = (props) => {
  return (
    <>
    
    {/* Card component is imported from the material Ui */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="175"
          image={props.imagesrc}
          alt="Iphone13"
        />

        {/* <IconButton aria-label="add to favorites">
          <pre>          </pre>
          <FavoriteIcon />
        </IconButton>   */}

    {/* CardMedia component is imported from material UI */}
        <CardContent>
          
     {/* Typography is imported from material UI */}
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CArds;
