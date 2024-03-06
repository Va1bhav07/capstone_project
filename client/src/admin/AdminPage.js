// App.js
import React from "react";
import "./admin.css";
// import Header from "./adminhead";
import Sidebar from "./adminside";
import CourseManagement from "./coursemanagement";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AdminPage() {
  return (
    <Row className="mt-5">
      <Col md={4}>
        <Sidebar />
      </Col>
      <Col md={8}>
        <CourseManagement />
      </Col>
    </Row>
  );
}

export default AdminPage;

// const AdminPage = () => {
//   const [showCourseForm, setShowCourseForm] = useState(false);

//   const handleAddCourse = () => {
//     setShowCourseForm(true);
//   };

//   const handleCancel = () => {
//     setShowCourseForm(false);
//   };

//   return (
//     <div className="App">
//       <Header />
//       <div className="container">
//         <Sidebar />
//         {/* <CourseManagement /> */}
//         <h2>Admin Dashboard</h2>
//         <button onClick={handleAddCourse}>Add Course</button>
//         {showCourseForm && <CourseForm onCancel={handleCancel} />}
//         <CourseList />
//       </div>
//       <footer className="footer">
//         <p>&copy; 2024 EduFlex. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default AdminPage;
