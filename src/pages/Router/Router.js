import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "../../component/Header/Header";
import Home from "../Home";


function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router