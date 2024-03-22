import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";
import CourseDetails from "./pages/courses/course-details";
import InstructorDetails from "./pages/instructor/instructor-details";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/About";
import FAQs from "./pages/FAQ";
import Admin from "./admin/AdminPage";
import UserProfile from "./pages/userProfile/usrProfile";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/course-details" element={<CourseDetails />} />
      <Route path="/instructor-details" element={<InstructorDetails />} />

      <Route path="/userprofile" element={<UserProfile />} />

    </Routes>
  );
}

export default App;
