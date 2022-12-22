import logo from "../logoBlackLionGrowShop.png"
import NavItem from "./NavItem";
import CartWidget from "./CartWidget";
import "./NavBar.css"

function NavBAr() {

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <img className="logo" src= {logo} alt="logo"/>
            </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavItem text="Productos"/>
              <NavItem text="Como comprar?"/>
              <NavItem text="Contacto"/>
              <CartWidget/>
            </ul>
          </div>
        </div>
     </nav>
    );

};

export default NavBAr;