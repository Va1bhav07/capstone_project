import React from "react";
import { Container, Row, Col, Image, Figure } from "react-bootstrap";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Carousel from 'react-bootstrap/Carousel';
import slideExample1 from '../../img/slide-example1.png';
import bannerImage from "../../img/banner.jpg"
import maleIcon from "../../img/icon-male.png"
import femaleIcon from "../../img/icon-female.png"
import "./index.css"

function Home() {

  const [open, setOpen] = useState(false);

  return (
  <>
    <Container className="margin-top">

      <Row>
        <Image src = {bannerImage} alt = "Students Learning" fluid roundedCircle />      
      </Row>
      
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1 className="margin-top">Elevate Your Learning, Enrich Your Life</h1>
        </Col>
      </Row>
      
      <Row>
        <Col>
        <p className="margin-top">
          Welcome to EduFlex, inspiration and education collide. Enter an enormous supply of educational content and observe how your boundaries grow. Our platform provides engaging classes, knowledgeable teachers, and interactive tools to pique your interests and propel your achievement.
        </p>
        </Col>
      </Row>

      {/*Image section for slides*/}
      <Row>
        <Col md={{span: 8, offset: 1}}>

          {/* replace below sample slides with curse slides' images as per design */}
          <p className="margin-top" style={{backgroundColor: "aqua"}}>//"Replace with Course Slide Images"</p>

          <Carousel data-bs-theme="dark" className="margin-top">
            <Carousel.Item interval={1000} >
              <Image src={slideExample1} alt="First slide" width={"800px"}  height={"400px"} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Text goes here..</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
              <Image src={slideExample1} alt="Second slide" width={"800px"}  height={"400px"} />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Text goes here..</p>
              </Carousel.Caption>
            </Carousel.Item>
      
            <Carousel.Item interval={1000}>
            <Image src={slideExample1} alt="Third slide" width={"800px"}  height={"400px"} />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                Text goes here..
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row>
        <Col>
          <h5 className="margin-top" >Step into the Future of Education. Unlock New Doors of Knowledge. Ignite Your Curiosity with New Courses</h5>
        </Col>
        </Row>
        
        <Row>
          <Col md={4}>
            <Button className="margin-top" variant="info"
              onClick={() => setOpen(!open)}
              aria-controls="collapse-courses"
              aria-expanded={open}
            >
              Unveil our New Courses
            </Button>
          </Col>
        </Row>
        
        <Row>
          <Collapse in={open}>
            <div id="example-collapse-text" >
              <h3 className="margin-top" style={{ color:"red", padding:"20px", borderRadius:"10px"}}>This component is under development...!!!
              </h3>
            </div>
          </Collapse>
        </Row>
        
        <Row>
          <Col>
            <h2 className="margin-top">Testimonials</h2>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <Figure className="margin-top">
              <Figure.Image
                alt="person icon"
                src={maleIcon}
                width={"100px"}
                height={"100px"}
              />  
              <Figure.Caption>
               <h5>Thilakh</h5>
                <h6 className="italic">IT professional</h6>
                <p className="italic margin-top">
                 For me, taking classes with EduFlex has changed everything. I balanced a busy schedule with my pursuits. I'm grateful to EduFlex for enabling me to do new things!
                </p>
              </Figure.Caption>
            </Figure>
          </Col>

          <Col className="text-center">
            <Figure className="margin-top">
              <Figure.Image
                alt="person icon"
                src={maleIcon}
                width={"100px"}
                height={"100px"}
              />
              <Figure.Caption>
                <h5>Sanjay</h5>
                <h6 className="italic">Business Analyst</h6>
                  <p className="italic margin-top">
                    Although I was apprehensive about taking an online course. The community engagement is unmatched, the professors are competent, and the courses are captivating. EduFlex far surpassed my expectations. In a few months, I've learned more than I have in years of conventional schooling.
                  </p>
              </Figure.Caption>
            </Figure>
        </Col>

        <Col className="text-center">
        <Figure className="margin-top">
          <Figure.Image
            alt="person icon"
            src={femaleIcon}
            width={"100px"}
            height={"100px"}
          />
          <Figure.Caption>
            <h5>Dhruva</h5>
            <h6 className="italic">UI/UX 
            designer</h6>
            <p className="italic margin-top">
              I've experimented with a lot of onlinelearning environments as an avid learner, but none line EduFlex. Learning is made enjoyable by rich content and the intuitive UI. I rely on EduFlex to deliver ecellent instruction, whether I'm learning a new skill or developing my career.
            </p>
          </Figure.Caption>
        </Figure>
        </Col>

      </Row>


    </Container>
     <Container>

     </Container>
     </>
  );
}

export default Home;
