import  {Routes,Route} from "react-router-dom"
import Home from "../pages/Home";
import Login from "../pages/Login";
import AboutUs from "../pages/AboutUs";
import Courses from "../pages/Courses";
import Blog from "../pages/Blog";
import Teachers from "../pages/Teachers";
function AllRoutes(){
  return (
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/about" element={<AboutUs/>} ></Route>
        <Route path="/courses" element={<Courses/>} ></Route>
        <Route path="/blogs" element={<Blog/>}></Route>
        <Route path="/teachers" element={<Teachers/>} ></Route>
    </Routes>
  )
}
export default AllRoutes;