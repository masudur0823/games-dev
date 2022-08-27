import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../About";
import Blog from "../Blog";
import DashBoard from "../DashBoard";
import DevBlogs from "../DevBlogs";
import Home from "../Home";
import Login from "../Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/devblogs" element={<DevBlogs />} />

        {/* admin route */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/blog" element={<Blog />} />
        {/* admin route */}

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
