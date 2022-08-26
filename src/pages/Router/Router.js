import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import About from "../About";
import DevBlogs from "../DevBlogs";
import Home from "../Home";


function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/devblogs" element={<DevBlogs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router