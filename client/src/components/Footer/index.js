import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import './style.css';




export default class  Footer extends Component {

    constructor(props) { 
        super(props);

        this.listener = null;
        this.state = {
            status: "top"
        };
    }


    componentDidMount() {

    }

    // componentDidUpdate() {
    //   document.removeEventListener("scroll", this.listener);
    // }

    render() {





        return (
            <Row>
            <Col  style={{
            // backgroundImage: `url(${starBackground})`,
            backgroundColor: ` #FF8686`,
            opacity: `90%`,
            backgroundBlendMode: `multiply`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            // backgroundAttachment: `fixed`,
            // height: `100vh`,
            display: `flex`,
            alignItems: `center`,
            position: `relative`,
            width: `350px`,
            height:`200px`,
            //   cover no-repeat center center fixed`
        }} className="footer-div">
                <div className="footer-content-box">
            <p>Powered by The Media Team</p>
            <FontAwesomeIcon icon={faBolt} />
                </div>
    
            </Col>
          </Row>
 
      )

    }
}