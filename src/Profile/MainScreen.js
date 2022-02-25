import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Screen.css";

//This page gives the layout for 'ProfileScreen.js' and 'profile.js'

function MainScreen({ children, title }) {
  return (
    <div className="mainback">
      <Container>

        {/* row and container are imported from 'react-bootstrap' */}
        <Row>
          <div className="page">
            {title && (
              <>
                <h1 className="heading">{title}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default MainScreen;
