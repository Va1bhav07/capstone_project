import React from "react";
import { Container, Row, Col, Image, Figure, Badge } from "react-bootstrap";
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

  const dummyData = [{
    id:1,
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*fqH5PnLFfKSQshAyYfcTuw.png",
    name: "ChatGPT Expert",
    description:
    `"Discover ChatGPT: Unleash the Power of Conversational AI" - This course explores the foundation of ChatGPT, built upon GPT-3.5 and GPT-4 models tailored for conversational interactions. Delve into the fine-tuning process, combining supervised and reinforcement learning with human feedback. Learn how trainers, acting as both users and AI assistants, refine model performance. Explore the role of human feedback in ranking responses and fine-tuning through Proximal Policy Optimization, enhancing ChatGPT's conversational capabilities.`,
  },
  {
    id:2,
    image:
      "https://cdn.servermania.com/kb/KB-MERN-Featured.jpg",
    name: "MERN Stack Developer",
    description:
      "Unlock the power of the MERN stack – MongoDB, Express.js, React.js, and Node.js – and learn to build dynamic and scalable web applications from scratch. This comprehensive course covers everything from database management to front-end development, equipping you with the skills to create professional-grade projects. Ideal for beginners and experienced developers alike, dive into the world of full-stack web development and elevate your coding expertise. ",
  },
  {
    id:3,
    image:
      "https://miro.medium.com/v2/resize:fit:640/1*dgoS_PISb3YFdasC8qt_wA.png",
    name: "Python Developer Skills",
    description:
      "Embark on a journey to become a proficient Python developer with this comprehensive course. From basic syntax to advanced concepts, you'll explore every aspect of Python programming, including data manipulation, web development, automation, and more. Whether you're a beginner looking to start your coding journey or an experienced programmer aiming to enhance your skills, this course provides the perfect blend of theory and hands-on practice to help you succeed in the dynamic world of software development.",
  }
];

return (
  <>
    <Container className="mt-5">

      <Row>
        <Image src = {bannerImage} alt = "Students Learning" fluid roundedCircle />      
      </Row>
      
      <Row className="mt-5 latest-courses">
        <Col md={{ span: 8, offset: 2 }}>
          <h1 className="headings-homepage">Elevate Your Learning, Enrich Your Life</h1>
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col>
        <p className="italic">
          Welcome to EduFlex, inspiration and education collide. Enter an enormous supply of educational content and observe how your boundaries grow. Our platform provides engaging classes, knowledgeable teachers, and interactive tools to pique your interests and propel your achievement.
        </p>
        </Col>
      </Row>

      {/*Image section for slides*/}
      <Row className="mt-5 latest-courses" >
        <Col md={{span:8, offset:2}} sm={{}} className="mt-4 mb-4">

          {/* replace below sample slides with curse slides' images as per design */}
          <Carousel data-bs-theme="dark" className=""> 
            <Carousel.Item interval={1000}>
              <Image src={slideExample1} alt="First slide" className="img-fluid"/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Text goes here..</p>
              </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item interval={1000}>
              <Image src={slideExample1} alt="Second slide" className="img-fluid"/>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Text goes here..</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
              <Image src={slideExample1} alt="Third slide" className="img-fluid"/>
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

      <Row className="mt-5 latest-courses">
        <Col>
          <h5 className="headings-homepage">Step into the Future of Education. Unlock New Doors of Knowledge. Ignite Your Curiosity with New Courses</h5>
        </Col>
        </Row>
        
        <Row className="mt-4">
          <Col>
            <Button variant="outline-dark" size="lg"
              onClick={() => setOpen(!open)}
              aria-controls="collapse-courses"
              aria-expanded={open}
              as={Col}
              md={12} sm={12} xs={12} 
            >
              Unveil our Latest Courses
            </Button>
          </Col>
        </Row>
        
        <Row>
          <Collapse in={open}>
          <Row className="mt-4 latest-courses">
          <Col className="text-center mt-4 mb-4" xs={12} sm={{span:6}} md={{span:4, offset:0}}>
          <Badge pill className="margin-top-xs">NEW!</Badge>

            <Figure className="mt-1">
              <Figure.Image
                alt={dummyData[1].name}
                src={dummyData[1].image}
                width={"100px"}
                height={"53px"}
                rounded
              />
                
              <Figure.Caption>
               <h5>{dummyData[1].name}</h5>
               <Row>
                  <Col md={{span:2, offset:3}} sm={{span:4, offset:2}} xs={12} className="mb-1">
                    <Button variant="outline-info" href="/course-details">Details</Button>
                  </Col>
                  <Col md={5} sm={4} xs={12}>
                    <Button variant="outline-primary">Enroll</Button>
                  </Col>
                </Row>
                <p className="italic">
                  {dummyData[1].description}
                </p>
              </Figure.Caption>
            </Figure>
          </Col>

          <Col className="text-center vertical-separator mt-4 mb-4" xs={12} sm={6} md={{span:4}}>
          <Badge pill className="margin-top-xs">NEW!</Badge>
            
            <Figure className="mt-1">
              <Figure.Image
                alt={dummyData[2].name}
                src={dummyData[2].image}
                width={"100px"}
                height={"53px"}
                rounded
              />  
              <Figure.Caption>
                <h5>{dummyData[2].name}</h5>
                <Row>
                  <Col md={{span:2, offset:3}} sm={{span:4, offset:2}} xs={12} className="mb-1">
                    <Button variant="outline-info" href="/course-details">Details</Button>
                  </Col>
                  <Col md={5} sm={4} xs={12}>
                    <Button variant="outline-primary">Enroll</Button>
                  </Col>
                </Row>
                <p className="italic">
                  {dummyData[2].description}
                </p>
              </Figure.Caption>
            </Figure>
          </Col>

          <Col className="text-center vertical-separator remove-separator-sm  mt-4 mb-4" xs={12} sm={12} md={4}>
          <Badge pill className="margin-top-xs">NEW!</Badge>
            
            <Figure className="mt-1">
              <Figure.Image
                alt={dummyData[0].name}
                src={dummyData[0].image}
                width={"100px"}
                height={"53px"}
                rounded
              />  
              <Figure.Caption>
               <h5>{dummyData[0].name}</h5>
               <Row>
                  <Col md={{span:2, offset:3}} sm={{span:3, offset:3}} xs={12} className="mb-1">
                    <Button variant="outline-info" href="/course-details">Details</Button>
                  </Col>
                  <Col md={5} sm={1} xs={12}>
                    <Button variant="outline-primary">Enroll</Button>
                  </Col>
                </Row>
                <p className="italic">
                  {dummyData[0].description}
                </p>
              </Figure.Caption>
            </Figure>
          </Col>
      </Row>
          </Collapse>
        </Row>
        
        <Row className="mt-4 latest">
          <Col>
            <h2 className="headings-homepage">Testimonials</h2>
          </Col>
        </Row>

        <Row className="latest-courses mt-4">
          <Col className="text-center mt-4" xs={12} sm={6} md={4}>
            <Figure className="">
              <Figure.Image
                alt="person icon"
                src={maleIcon}
                width={"100px"}
                height={"100px"}
              />  
              <Figure.Caption>
               <h5>Thilakh</h5>
                <h6 className="italic">IT professional</h6>
                <p className="italic">
                 For me, taking classes with EduFlex has changed everything. I balanced a busy schedule with my pursuits. I'm grateful to EduFlex for enabling me to do new things!
                </p>
              </Figure.Caption>
            </Figure>
          </Col>

          <Col className="text-center mt-4" xs={12} sm={6} md={4}>
            <Figure className="">
              <Figure.Image
                alt="person icon"
                src={maleIcon}
                width={"100px"}
                height={"100px"}
              />
              <Figure.Caption>
                <h5>Sanjay</h5>
                <h6 className="italic">Business Analyst</h6>
                  <p className="italic">
                    Although I was apprehensive about taking an online course. The community engagement is unmatched, the professors are competent, and the courses are captivating. EduFlex far surpassed my expectations. In a few months, I've learned more than I have in years of conventional schooling.
                  </p>
              </Figure.Caption>
            </Figure>
        </Col>

        <Col className="text-center mt-4" xs={12} sm={12} md={4}>
        <Figure className="">
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
            <p className="italic">
              I've experimented with a lot of onlinelearning environments as an avid learner, but none line EduFlex. Learning is made enjoyable by rich content and the intuitive UI. I rely on EduFlex to deliver ecellent instruction, whether I'm learning a new skill or developing my career.
            </p>
          </Figure.Caption>
        </Figure>
        </Col>
      </Row>
    </Container>
    
    </>
  );
}

export default Home;
