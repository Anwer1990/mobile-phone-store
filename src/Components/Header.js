import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,    
  } from 'reactstrap';
  import Menu from './Menu';
import Caddy from './Caddy';

 class Header extends Component {
     
    
    render() {
        return (<Navbar color="light" light expand="md">
                    <NavbarBrand href="/">My Phone</NavbarBrand>
                        <NavbarToggler  />
                        <Collapse  navbar>                    
                            <Menu/>                    
                        <Caddy />
                    </Collapse>
                </Navbar>
        )
    }
}


export default Header
