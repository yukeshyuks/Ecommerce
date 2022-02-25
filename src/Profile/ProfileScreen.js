/* eslint-disable no-unused-vars */
import React, { Component, useContext } from "react";
import { Col, Row,  Form } from "react-bootstrap";

// The MainScreen.js gives the layout of this page
import MainScreen from "./MainScreen";

// This page is styled by 'ProfileScreen.js' in "src/Profile/ProfileScreen.css"

import "./ProfileScreen.css";

// The photo in this page is imported from 'ViewPhoto.js' in "src/ViewProfile/ViewProfile.js"


import ViewPhoto from "../ViewProfile/ViewPhoto";





// This page consists of the content of the 'view profile' page



const ProfileScreen = () => {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //      items: []
  //   }
  // }

  // componentDidMount(){
  //     fetch('http://127.0.0.1:8000/api/v1/users/',{
  //         headers: {
  //             'Authorization'; 'Basic'
  //         }
  //     })
  //         .then(res => res.json())
  //         .then(data => console.log(data))
  //         .catch(error => console.log('error'))
  //         .then(json =>{
  //             this.setState({

  //                 items: json
  //             })

  //         });
  // }
  // const state = useContext(GlobalState)
  // const [products]  = state.productAPI.products

  return (

    // The following code is responsible for the form appearing in this page


    <MainScreen title="VIEW PROFILE">
      <div>
        <Row className="profilecontainer">
          <Col md={6} style={{}}>
            <Form className="label">
              <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  // placeholder="Enter Name"
                  value="John Doe"
                ></Form.Control>
              </Form.Group>
              <br />
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  // placeholder="Enter Email"
                  value="Johndoe@gmail.com"
                ></Form.Control>
              </Form.Group>
              <br />

              <div> </div>
            </Form>
          </Col>



          {/* The following code is responsible for the Photo appearing o the right side of the screen */}
          <Col
            style={{
              display: "flex",
              alignItems: "right",
              justifyContent: "flex-start",
            }}
          >
            <ViewPhoto />
          </Col>
        </Row>


        {/* The following code is responsible for the curve present in the bottom of the 'VIEW PROFILE' page */}

        

        <div class="custom-shape-divider-bottom-1642824782-E">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </MainScreen>
  );
};

export default ProfileScreen;
