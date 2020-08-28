
import { Container, Nav, Button, Image } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.css';
import { Drawer } from '@material-ui/core';
// import TemporaryDrawer from '../Drawer/index'

// import logo from '../../media/moons.png'
// import whiteArrow from '../../media/white-arrow.png'

export default class Navigation extends Component {

  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      isMobile: false
    };
  }


  componentDidMount() {

  
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);



  }

  render() {

    const { isMobile } = this.state;



    return (
  
      <div>
         <Navbar expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Brand href="#home"> Millie
    {/* <Image src={logo} width="300px"></Image> */}
  </Navbar.Brand>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="">
      <Nav.Link href="/">Works</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>

      
    </Nav>
  </Navbar.Collapse>
</Navbar>
     
      </div >
    )

  }
}





