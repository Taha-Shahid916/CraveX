import { useState } from "react";
import img1 from "url:../utils/CraveXnew.png";
import { Link } from "react-router";
const Header = () => {
  const [buttonname, setbuttonname] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
       <a href="index.html"><img className="logo" src={img1} alt="Logo.png"></img></a>
      </div>
      <div className="nav-bar">
        <ul >
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About Us</li></Link>
          <Link to="/contact"><li>Contact Us</li></Link>
          <Link to="/cart"><li>Cart</li></Link>
          <button className="login" onClick={() => {
            buttonname == "Login" ? setbuttonname("Logout") : setbuttonname("Login");
          }}>
            {buttonname}
          </button>
            
        </ul>
      </div>
    </div>
  );
};

export default Header;