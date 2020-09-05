import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
import Navigation from "../../components/Navigation"
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import './style.css';
import whiteLogo from '../../media/white-logo.png'

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


    fetchPosts() {
        fetch('/api/posts')
            .then(res => res.json())
            .then(json => {
                console.log("json", json.data)
                this.setState({
                    posts: json.data
                })
            })
    }


    componentDidMount() {

        this.fetchPosts();

    }




    render() {
        return(

      <div>
          <Navigation color="white" logo={whiteLogo}/>
          <Hero logo={whiteLogo} worksObject={this.props.worksObject}></Hero>
          <Works worksObject={this.props.worksObject} ></Works>
      </div>
        )

    }
}