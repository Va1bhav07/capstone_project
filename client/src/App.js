import Login from "./pages/authentication/Login";
import SignOut from "./pages/authentication/Signout";
import Signup from "./pages/authentication/Signup";
import CourseDetails from "./pages/courses/course-details";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import InstructorDetails from "./pages/instructor/instructor-details";
import PrivateRoutes from "./Layout/routes/private-routes";
import ProtectedRoutes from "./Layout/routes/protected-routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signout" element={<SignOut />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/instructor-details" element={<InstructorDetails />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        {/* routes for private i.e admin pages etc */}
      </Route>
    </Routes>
  );
}

export default App;
