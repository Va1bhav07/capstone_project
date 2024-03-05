// components/adminside.js
import React from 'react';
import './admin.css';

const adminside = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="./courseform.js">Courses</a></li>
          <li><a href="#">Students</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default adminside;
