// App.js
import React, {useState} from 'react';
import './admin.css';
import Header from './adminhead';
import Sidebar from './adminside';
import CourseManagement from './coursemanagement';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar />
        <CourseManagement />
      </div>
      <footer className="footer">
        <p>&copy; 2024 EduFlex. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

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


