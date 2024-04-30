import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Navbar/Nav";

const Root = () => {
    return (
      <div>
        <Nav></Nav>
        <div className="mx-auto container">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Root;