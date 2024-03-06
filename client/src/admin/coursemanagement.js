import React, { useState } from "react";
import "./admin.css";

const CourseManagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [newCourse, setNewCourse] = useState({ title: "", instructor: "" });

  const handleAddCourse = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setNewCourse({ title: "", instructor: "" }); // Reset form fields
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleSaveCourse = (e) => {
    e.preventDefault();
    // Implement logic to save the course
    console.log("New course:", newCourse);
    setShowForm(false);
    setNewCourse({ title: "", instructor: "" }); // Reset form fields
  };

  const handleDeleteCourse = (courseId) => {
    // Implement logic to delete the course with the specified ID
    console.log("Delete course:", courseId);
  };

  const handleUpdateCourse = (courseId) => {
    // Implement logic to update the course with the specified ID
    console.log("Update course:", courseId);
  };

  const courseList = [
    { id: 1, title: "Course 1", instructor: "Instructor 1" },
    { id: 2, title: "Course 2", instructor: "Instructor 2" },
    { id: 3, title: "Course 3", instructor: "Instructor 3" },
  ];

  return (
    <main className="course-management">
      <h2>Course Management</h2>
      <div className="action-buttons">
        <button onClick={handleAddCourse}>Add Course</button>
      </div>
      {showForm && (
        <div className="popup-form">
          <div className="form-container">
            <span className="close" onClick={handleCloseForm}>
              &times;
            </span>
            <h3>Add Course</h3>
            <form onSubmit={handleSaveCourse}>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={newCourse.title}
                onChange={handleChange}
                required
              />
              <label htmlFor="instructor">Instructor:</label>
              <input
                type="text"
                id="instructor"
                name="instructor"
                value={newCourse.instructor}
                onChange={handleChange}
                required
              />
              <button type="submit">Save Course</button>
            </form>
          </div>
        </div>
      )}
      <div className="course-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Instructor</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courseList.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.title}</td>
                <td>{course.instructor}</td>
                <td>
                  <button onClick={() => handleUpdateCourse(course.id)}>
                    Update
                  </button>
                  <button onClick={() => handleDeleteCourse(course.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default CourseManagement;
