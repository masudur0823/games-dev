import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../About";
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
        <Route path="/" element={<Login />} />
        {/* admin route */}

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
