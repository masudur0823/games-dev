import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../About";
import AccountSetting from "../AccountSetting";
import Blog from "../Blog";
import ChangePassword from "../ChangePassword";
import DashBoard from "../DashBoard";
import DevBlogDetails from "../DevBlogDetails";
import DevBlogs from "../DevBlogs";
import Home from "../Home";
import Login from "../Login";
import Merch from "../Merch";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/devblogs" element={<DevBlogs />} />
        <Route path="/devblogsDetails" element={<DevBlogDetails />} />

        {/* admin route */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/settings" element={<AccountSetting />} />
        {/* admin route */}

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
