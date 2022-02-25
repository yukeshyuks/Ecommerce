import React, { Component } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import MainScreen from "./MainScreen";
import "./ProfileScreen.css";

// The photohandler in this page is imported from Photo.js in "src/addimage/Photo.js" 
import Photo from "../addimage/Photo";

// axios is imported for api call
import axios from "axios";

// The curve in this page is styled with 'Shape-e.css'
import "./Shape-e.css";

// This page consists of the content of edit profile page
//This page uses col,row,button and form from React-bootstrap



export class Profile extends Component {

  // The following code is responsible for http POST call for connecting to the api 

  constructor(props) {
    super(props);

    this.state = {};
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/v1/users/", this.state)
      .then((response) => {
        console.log(response);
      });
  };



  render() {
    const { email, username, password } = this.state;
    return (

      // The following code displays the form in "Edit profile page"


      <div>
        <MainScreen title="EDIT PROFILE">
          <div>
            <Row className="profilecontainer">
              <Col md={6} style={{}}>
                <Form className="label" onSubmit={this.handleSubmit}>
                  <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                    ></Form.Control>
                  </Form.Group>
                  <br />
                  <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                    ></Form.Control>
                  </Form.Group>
                  <br />
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    ></Form.Control>
                  </Form.Group>
                  <br />
                  <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                    ></Form.Control>
                  </Form.Group>
                  <br />
                  {/* <Form.Group controlId="Phone">
                                    <Form.Label style={{justifyContent:'left'}}>Phone</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter Phone Number"
                                        
                                        onChange={this.handleChange}
                                        ></Form.Control>
                                </Form.Group><br/>
                                <Form.Group controlId="Address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Address"
                                        onChange={this.handleChange}
                                        ></Form.Control>
                                </Form.Group> <br/> */}
                  <div> </div>

                  <Button type="submit" varient="primary" className="btn3">
                    Update
                  </Button>
                </Form>
              </Col>


              {/* The following code displays the Photo present in the right side of the edit profile page */}


              <Col
                style={{
                  display: "flex",
                  alignItems: "right",
                  justifyContent: "flex-start",
                }}
              >
                <Photo />
              </Col>
            </Row>
          </div>
        </MainScreen>



        {/* The following code is responsible for the curve present in the bottom of the 'EDIT PROFILE' page */}


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
    );
  }
}

export default Profile;
