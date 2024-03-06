import React, { useState } from "react";
import CardComp from "../../../components/Cards";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import axios from "axios";

const dummyData = {
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*fqH5PnLFfKSQshAyYfcTuw.png",
    name: "ChatGPT Expert",
    description: "ChatGPT is based on particular GPT foundation models, namely GPT-3.5 and GPT-4, that were fine-tuned to target conversational usage.The fine-tuning process leveraged supervised learning and reinforcement learning from human feedback (RLHF). Both approaches employed human trainers to improve model performance. In the case of supervised learning, the trainers played both sides: the user and the AI assistant. In the reinforcement learning stage, human trainers first ranked responses that the model had created in a previous conversation.[13] These rankings were used to create  that were used to fine-tune the model further by using several iterations of Proximal Policy Optimization.",
};

function CourseDetails() {
    const [courseDetails, setCourseDetails] = useState({
        image: "",
        name: "",
        description: "",
    });
    const getCourseDetails = () => {
        const url = "http://localhost:4000/course/1";
        axios
            .get(url)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
                // filling dummy data
                setCourseDetails(dummyData);
            });
    };
    getCourseDetails();
    return (
        <section className="d-flex justify-content-center align-items-center">
            <CardComp className="mt-2 card-course p-1">
                <Card.Title className="text-center fs-2 mb-4">Course Details</Card.Title>
                <Row>
                    <Col lg="3">
                        <Image src={courseDetails.image} thumbnail />
                    </Col>
                    <Col lg="9">
                        <h3>Name: {courseDetails.name} </h3>
                        <p>
                            <strong>Details:</strong> {courseDetails.description}
                        </p>
                        <Button type="submit">
                            Enroll this course
                        </Button>
                    </Col>
                </Row>

            </CardComp>
        </section>
    );
}

export default CourseDetails;
