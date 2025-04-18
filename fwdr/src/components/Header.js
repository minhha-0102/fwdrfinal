import  Container from "react-bootstrap/Container";
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import Button from '../style/button.css';


function Header(){
    return <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand> 
            <Link to="/" className="navbar-brand">
            <img src="../../images/logo-porsche-3.png" alt="Porsche Logo" height="100" />
            </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
            <Navbar.Collapse className="d-flex justify-content-center" id ='basic-navbar-nav'>
                <Nav >
                    <NavLink to="/home" style={{textDecoration:"none",color:"black"}} className=" m-2">Home</NavLink>
                    <NavLink to="/order"style={{textDecoration:"none",color:"black"}} className="m-2">Products</NavLink>
                    <NavLink to="/aboutme" style={{textDecoration:"none",color:"black"}}  className="m-2">About Me</NavLink>
                </Nav>
            </Navbar.Collapse>
            <div className="button-container">
        <Link to="/login" className="btn-logins">
          Logins
        </Link>
        <Link to="/" className="btn-cancel">
          Cancel
        </Link>
      </div>
        </Container>
    </Navbar>
}
export default Header;
