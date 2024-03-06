import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/About";
import FAQs from "./pages/FAQ";
import Admin from "./admin/AdminPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/faqs" element={<FAQs />} />

      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
