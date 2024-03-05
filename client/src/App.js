import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/login";
import AboutUs from "./components/AboutUs";
import FAQs from "./components/FAQs";
import Admin from "./admin/AdminPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  )}

export default App;
