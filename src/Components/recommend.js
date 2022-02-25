import React from 'react'
import CArds from './CArds';

//for bootstrap styles
import 'bootstrap/dist/css/bootstrap.css';

//imports from react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//This page represents the contents in 'Myads.js'
//This page uses the card view imported from 'CArds.js'

const Recommend = () => {
  return (
    <div><br/>
      <div><h1 ><pre>                                    My Ads</pre></h1></div><br/>
    {/* container component has styles imported from bootstrap.css file  */}
      <container>
    {/* Row component is imported from react-bootstrap  */}
        <Row>
          {/* Col component is imported from react-bootstrap */}
          <Col >
        {/* CArds component is imported from CArds.js */}
            <CArds 
              name="iphone6"
              desc="Impressive iphone6 on hot sale"
              imagesrc={"https://images.pexels.com/photos/7616999/pexels-photo-7616999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
          </Col>
          <Col >
            <CArds 
              name="Bicycle"
              desc="Impressive cycle on hot sale"
              imagesrc={"https://images.unsplash.com/photo-1623216216626-f8bfd191552d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGN5Y2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}/>
          </Col>
          <Col >
            <CArds 
              name="Laptop"
              desc="Impressive Laptop on hot sale"
              imagesrc={"https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}/>
          </Col>
          <Col >
            <CArds 
              name="Romet Bicycle"
              desc="Impressive Bicycle on hot sale"
              imagesrc={"https://images.unsplash.com/photo-1529422643029-d4585747aaf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3ljbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}/>
          </Col><br/><br/>

        </Row>
      </container>
      <container>
      <Row>
      
        <Col >
            <CArds 
              name="Chromebook"
              desc="Impressive Chromebook on hot sale"
              imagesrc={"https://images.unsplash.com/photo-1559163499-413811fb2344?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}/>
          </Col>
          
        </Row>
        
       </container>

    {/* For the curves present at the bottom  */}
       <div class="custom-shape-divider-bottom-1642824782-E">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
    </div> 
  )
}

export default Recommend
