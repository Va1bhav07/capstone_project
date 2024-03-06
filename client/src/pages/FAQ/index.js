import React from "react";
// import Header from './Header'; // Import Header component
// import Footer from "./Footer"; // Import Footer component
import "./FAQs.css"; // Import CSS for styling

const FAQs = () => {
  return (
    <div className="full-page">
      {/* <Header /> */}
      <div className="faqs-container">
        <div className="faqs">
          <h1 className="faqs-heading">Frequently Asked Questions</h1>
          <div className="faq">
            <input type="checkbox" className="faq-toggle" id="faq1" />
            <label className="faq-question" htmlFor="faq1">
              What is EduFlex?
            </label>
            <div className="faq-answer">
              EduFlex is an innovative online learning platform designed to
              provide users with a comprehensive and flexible learning
              experience. It offers a diverse range of courses spanning various
              subjects, including technology, business, arts, sciences, and
              more. EduFlex aims to empower learners of all ages and backgrounds
              to acquire new skills, expand their knowledge, and achieve their
              personal and professional goals.
            </div>
          </div>
          <div className="faq">
            <input type="checkbox" className="faq-toggle" id="faq2" />
            <label className="faq-question" htmlFor="faq2">
              How do I enroll in a course?
            </label>
            <div className="faq-answer">
              To enroll in a course, simply navigate to the course page and
              click on the "Enroll" button. Follow the prompts to complete the
              enrollment process.
            </div>
          </div>
          <div className="faq">
            <input type="checkbox" className="faq-toggle" id="faq3" />
            <label className="faq-question" htmlFor="faq3">
              Can I access course materials offline?
            </label>
            <div className="faq-answer">
              Yes, you can download course materials for offline access. Look
              for the download option next to each resource.
            </div>
          </div>
          <div className="faq">
            <input type="checkbox" className="faq-toggle" id="faq4" />
            <label className="faq-question" htmlFor="faq4">
              How do I contact support?
            </label>
            <div className="faq-answer">
              You can contact support by emailing support@eduflex.com or by
              filling out the contact form on our website.
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default FAQs;
