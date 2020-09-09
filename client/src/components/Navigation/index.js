import { Container, Nav, Button, Image } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
// import logo from './logo.svg';
import "./style.css";
import { Drawer } from "@material-ui/core";
import whiteLogo from "../../media/white-logo.png";

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      isMobile: false,
    };
  }

  scrollUp =() => {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    // if (window.innerWidth < 667) {
    //   this.setState({
    //     isMobile: true
    //   })
    //   console.log("not mobile")
    // }

    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= this.props.scrollDistance) {
        if (this.state.status !== "bgChanged") {
          this.setState({ status: "bgChanged" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    const { isMobile } = this.state;

    return (
      <div>
        <Navbar
          style={{
            width: `100%`,
            backgroundColor:
              this.state.status === "top"
                ? "transparent"
                : `${this.props.scrolledBgColor}`,
            transition: ".6s",
          }}
        >
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Brand href="/">
            {this.state.status === "top" ? (
              <Image src={this.props.logo} width="100px"></Image>
            ) : (
              <Image src={this.props.scrolledLogo} width="100px"></Image>
            )}
          </Navbar.Brand>
          <Nav className="">
            <Nav.Link
              style={{
                color:
                  this.state.status === "top"
                    ? `${this.props.color}`
                    : `${this.props.scrolledColor}`,
                transition: ".6s",
              }}
              href="/"
            >
              Works
            </Nav.Link>
            <Nav.Link
              style={{
                color:
                  this.state.status === "top"
                    ? `${this.props.color}`
                    : `${this.props.scrolledColor}`,
                transition: ".6s",
              }}
              href="/about"
            >
              About
            </Nav.Link>
            <Nav.Link className="nav-arrow">
              <Image onClick={this.scrollUp} style={{ display: this.state.status === "top" ? "none" : "flex", transition: '.6s' }} src={this.props.arrow}></Image>
            </Nav.Link>
          </Nav>
          {/* <Navbar.Collapse id="basic-navbar-nav">
  </Navbar.Collapse> */}
        </Navbar>
      </div>
    );
  }
}
