import React from "react";

function CourseAction() {
  return (
    <>
      <div className="d-flex flex-row align-items-center mb-1">
        <h4 className="mb-1 me-1">$13.99</h4>
        <span className="text-danger">
          <s>$20.99</s>
        </span>
      </div>
      <h6 className="text-success">Free shipping</h6>
      <div className="d-flex flex-column mt-4">
        <button className="btn btn-primary btn-sm" type="button">
          Details
        </button>
        <button className="btn btn-outline-primary btn-sm mt-2" type="button">
          Add to cart
        </button>
      </div>
    </>
  );
}

export default CourseAction;
