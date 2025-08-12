import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import Conferences from "./components/Conferences";
import Courses from "./components/Courses";
import Services from "./components/Services";
import Membership from "./components/Membership";
import About from "./components/About";
import Contact from "./components/Contact";
import "./styles/style.css";
import "./styles/header.css";
import "./styles/Conferences.css";
import "./styles/Courses.css";
import "./styles/Services.css";
import "./styles/Membership.css"; 
import "./styles/About.css";
import "./styles/Contact.css";
import "./styles/footer.css";
// import "./styles/Auth.css";

function MainLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/services" element={<Services />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </div>
  );
}

export default App;