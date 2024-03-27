import React, { useState, useEffect } from "react";
import CardComp from "../../../components/Cards";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useParams } from "react-router-dom";
import axios from "axios";

const dummyData = [
  {
      "id": 1,
      "title": "Machine Learning A-Z™: Hands-On Python & R In Data Science",
      "short_description": "Learn to create Machine Learning algorithms in Python and R from two data science experts.",
      "author": "Kirill Eremenko & Hadelin de Ponteves",
      "rating": 4.7,
      "price": 129.99,
      "level": "Beginner",
      "language": "English",
      "Publish_date": "2024-03-23",
      "image_data": "https://i.ibb.co/s95ZffN/python.jpg"
  },
  {
      "id": 2,
      "title": "The Complete JavaScript Course 2022: From Zero to Expert!",
      "short_description": "Master JavaScript with projects, challenges, theory, and real-world examples.",
      "author": "Jonas Schmedtmann",
      "rating": 4.9,
      "price": 99.99,
      "level": "Intermediate",
      "language": "English",
      "Publish_date": "2024-03-23",
      "image_data": "https://i.ibb.co/Rc77GC1/maxresdefault.jpg"
  },
  {
      "id": 3,
      "title": "Python for Data Science and Machine Learning Bootcamp",
      "short_description": "Learn Python for data science, machine learning, and data analysis.",
      "author": "Jose Portilla",
      "rating": 4.8,
      "price": 94.99,
      "level": "Advance",
      "language": "English",
      "Publish_date": "2024-03-23",
      "image_data": "https://i.ibb.co/XJjdcn0/3.png"
  },
  {
      "id": 4,
      "title": "React - The Complete Guide (incl Hooks, React Router, Redux)",
      "short_description": "Dive into React.js to build powerful and fast user interfaces.",
      "author": "Maximilian Schwarzmüller",
      "rating": 4.8,
      "price": 119.99,
      "level": "Expert",
      "language": "English",
      "Publish_date": "2024-03-23",
      "image_data": "https://i.ibb.co/YdGNz2Y/9781789132229-Part2.png"
  },
  {
      "id": 5,
      "title": "Java Programming Masterclass for Software Developers",
      "short_description": "Learn Java from scratch and become a confident Java programmer.",
      "author": "Tim Buchalka & Goran Lochert",
      "rating": 4.6,
      "price": 129.99,
      "level": 4,
      "level": "Expert",
      "language": "French",
      "Publish_date": "2024-03-23",
      "image_data": "https://i.ibb.co/37kQZGB/online-courses.jpg"
  },
  {
      "id": 6,
      "title": "The Complete Digital Marketing Course - 12 Courses in 1",
      "short_description": "Master digital marketing strategies and become a certified digital marketing expert.",
      "author": "Rob Percival & Daragh Walsh",
      "rating": 4.7,
      "price": 149.99,
      "level": "Expert",
      "language": "German",
      "Publish_date": "2024-03-20",
      "image_data": "https://i.ibb.co/37kQZGB/online-courses.jpg"
  },
  {
      "id": 7,
      "title": "Complete C# Unity Game Developer 3D",
      "short_description": "Create games with C# and Unity, including augmented reality (AR) and virtual reality (VR) projects.",
      "author": "Ben Tristem & Rick Davidson",
      "rating": 4.8,
      "price": 129.99,
      "level": "Advance",
      "language": "English",
      "Publish_date": "2024-03-20",
      "image_data": "https://i.ibb.co/37kQZGB/online-courses.jpg"
  },
  {
      "id": 8,
      "title": "AWS Certified Solutions Architect - Associate 2022",
      "short_description": "Prepare for the AWS Certified Solutions Architect - Associate exam with hands-on labs and practice exams.",
      "author": "Ryan Kroonenburg & Faye Ellis",
      "rating": 4.7,
      "price": 129.99,
      "level": "Intermediate",
      "language": "English",
      "Publish_date": "2024-02-20",
      "image_data": "https://i.ibb.co/37kQZGB/online-courses.jpg"
  },
  {
      "id": 9,
      "title": "SQL - MySQL for Data Analytics and Business Intelligence",
      "short_description": "Master SQL and MySQL to manipulate data, perform queries, and analyze business data.",
      "author": "365 Careers",
      "rating": 4.5,
      "price": 99.99,
      "level": "Beginner",
      "language": "English",
      "Publish_date": "2024-02-20",
      "image_data": "https://i.ibb.co/37kQZGB/online-courses.jpg"
  },
  {
      "id": 10,
      "title": "Angular - The Complete Guide (2022 Edition)",
      "short_description": "Master Angular and build modern, scalable, and high-performance web applications.",
      "author": "Maximilian Schwarzmüller",
      "rating": 4.8,
      "price": 129.99,
      "level": "Beginner",
      "language": "English",
      "Publish_date": "2024-02-20",
      "image_data": "https://i.ibb.co/37kQZGB/online-courses.jpg"
  }
];

function CourseDetails() {
  const location = useParams()
  const [courseDetails, setCourseDetails] = useState({
    image: "",
    name: "",
    description: "",
  });

  useEffect(() => {
    getCourseDetails(location);
  }, [location]);

    const getCourseDetails = (location) => {
      const { id } = location;
      var data = dummyData.filter(function (el) {
        return el.id == id ;
      });
      setCourseDetails(data[0]);
      // const url = "http://localhost:4000/course/1";
      // axios
      //   .get(url)
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //     // filling dummy data
      //     setCourseDetails(dummyData);
      //   });
    };
  return (
    <section className="d-flex justify-content-center align-items-center">
      <CardComp className="mt-2 card-course p-1">
        <Card.Title className="text-center fs-2 mb-4">
          Course Details
        </Card.Title>
        <Row>
          <Col lg="3">
            <Image src={courseDetails.image_data} thumbnail />
          </Col>
          <Col lg="9">
            <h3>{courseDetails.title} </h3>
            <p>
              <strong>Details:</strong> {courseDetails.short_description}
            </p>
            <p>Course level: {courseDetails.level}</p>
            <p>language: {courseDetails.language}</p>
            <p>${courseDetails.price}</p>
            <p>By: {courseDetails.author}</p>
            <p>Ratings: {courseDetails.rating}</p>
            <Button type="submit">Add to cart</Button>
          </Col>
        </Row>
      </CardComp>
    </section>
  );
}

export default CourseDetails;
