import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import './style.css';

import Hero from '../../components/Hero'
import Works from '../../components/Works'


export default class Homepage extends Component {

    constructor(props) {
        super(props);

        this.listener = null;
        this.state = {
            status: "top",
            showModal: false,
            forms: []
        };
    }




    render() {
        return(

      <div>
          <Hero worksObject={this.props.worksObject}></Hero>
          <Works worksObject={this.props.worksObject} ></Works>
      </div>
        )

    }
}