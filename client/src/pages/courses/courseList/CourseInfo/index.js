import React from "react";
import { FaStar } from "react-icons/fa6";

function CourseInfo() {
  return (
    <>
      <h5>Quant trident shirts</h5>
      <div className="d-flex flex-row">
        <div className="text-danger mb-1 me-2">
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
        </div>
        <span>310</span>
      </div>
      <div className="mt-1 mb-0 text-muted small">
        <span>100% cotton</span>
        <span className="text-primary"> • </span>
        <span>Light weight</span>
        <span className="text-primary"> • </span>
        <span>
          Best finish
          <br />
        </span>
      </div>
      <div className="mb-2 text-muted small">
        <span>Unique design</span>
        <span className="text-primary"> • </span>
        <span>For men</span>
        <span className="text-primary"> • </span>
        <span>
          Casual
          <br />
        </span>
      </div>
      <p className="text-truncate mb-4 mb-md-0">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable.
      </p>
    </>
  );
}

export default CourseInfo;
