import logo from "../../logoBlackLionGrowShop.png"
import NavItem from "./NavItem";
import CartWidget from "../CartWidget";
import "./NavBar.css"
import { NavLink } from "react-router-dom";

function NavBAr() {

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <NavLink to="/"><img className="logo" src= {logo} alt="logo"/></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink to="/category/fertilizantes">Fertilizantes</NavLink>
              <NavLink to="/category/sustratos">Sustratos</NavLink>
              <NavLink to="/category/macetas">Macetas</NavLink>
              <NavLink to="/category/iluminacion">Iluminación</NavLink>
              <CartWidget/>
            </ul>
          </div>
        </div>
     </nav>
    );

};

export default NavBAr;