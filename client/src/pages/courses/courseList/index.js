import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardComp from "../../../components/Cards";
import CourseAction from "./CourseActions";
import CourseInfo from "./CourseInfo";

function CourseList() {
  return (
    <section>
      <div className="py-5">
        <Row className="justify-content-center mb-3">
          <Col md={12} xl={10}>
            <CardComp className="shadow-0 border rounded-3">
              <Row>
                <Col md={12} lg={3} className="mb-4 mb-lg-0">
                  <div className="bg-image hover-zoom ripple rounded ripple-surface">
                    <img
                      alt="course"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                      className="w-100"
                    />
                    <a href="#!">
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: `rgba(253, 253, 253, 0.15)`,
                          }}
                        ></div>
                      </div>
                    </a>
                  </div>
                </Col>
                <Col md={6}>
                  <CourseInfo />
                </Col>
                <Col
                  md={6}
                  lg={3}
                  className="border-sm-start-none border-start"
                >
                  <CourseAction />
                </Col>
              </Row>
            </CardComp>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default CourseList;
