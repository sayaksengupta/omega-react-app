
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import UserType from './pages/UserType';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Advisor from './pages/Advisor';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import Faq from './pages/Faq';
import AddBlog from './pages/AddBlog';

function App() {
  return (
    <Router> 
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/advisor" exact element={<Advisor />} />
            <Route path="/user-selection" exact element={<UserType />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/contact-us" exact element={<ContactUs />} />
            <Route path="/blog" exact element={<Blog />} />
            <Route path="/add-blog" exact element={<AddBlog />} />
            <Route path="/faq" exact element={<Faq />} />
          </Routes>
      </Router> 
  );
}


export default App;
