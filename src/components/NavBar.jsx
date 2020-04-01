import React, {useState} from "react";

import { Link, withRouter } from "react-router-dom";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


const NavBar = (props) => {


    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);

    return (
       
    <div>
        <Navbar color="black" light expand="md">
            <Link to="/">
                {/* <NavbarBrand>
                    <img className="yeet" src = {logo}/>
                </NavbarBrand> */}
            </Link>
            
            <NavbarToggler onClick={toggle} style={{color: 'white', backgroundColor: 'white'}}/>
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                <Link to='/'>
                        <NavLink  style={{color: 'white'}}>Home</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to='/about'>
                        <NavLink style={{color: 'white'}}>About</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to='/projects'>
                        <NavLink style={{color: 'white'}}>Projects</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to='/contact'>
                        <NavLink style={{color: 'white'}}>Contact</NavLink>
                    </Link>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
    </div>

    )
}


export default NavBar;

