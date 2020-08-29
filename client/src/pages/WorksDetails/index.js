import React, { Component, } from "react";
import { Card, ListGroup, ListGroupItem, Button, Image, CardDeck, Table, Accordion, Spinner, Row, Col } from 'react-bootstrap';
import './style.css'
import $ from 'jquery';
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// const queryString = require('query-string');
import Navigation from "../../components/Navigation"
import logo from '../../media/millie-logo-colored.png'
require("dotenv").config();

export default class WorksDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenWork: ''
        };
    }


     addSpaces =() => {
        console.log("Adding spaces")
        $('.modal-description').each(function () {
          var text = $(this).text();
          $(this).html(text.replace(/\*/g, '<br></br>'));
        });
      }

    componentDidMount() {
      

        console.log(this.props.match.params)
        let param = Object.values(this.props.match.params);
        console.log(param)
        this.setState({
            chosenWork: param
        })
        // this.addSpaces();
    };


    componentDidUpdate() {
        this.addSpaces();
    }




    render() {




        const { chosenWork, currentWork } = this.state;
        const prevModal = this.props.worksObject[Number(chosenWork) - 1]
        const thisModal = this.props.worksObject[chosenWork];
        const nextModal = this.props.worksObject[Number(chosenWork) + 1];

        return (
            <div>
               <Navigation logo={logo} color="#FF8686"/>

            <div className="works-page">
                {thisModal ? (
                <div className="works-container">
                    <Image className="off-image" src={thisModal.image} />
                    <div className="works-description">
                        <h1 className="works-title">{thisModal.title}</h1>
                        {/* <hr style={{ width: `50%` }}></hr> */}
                        <p className="modal-description">{thisModal.description}
                        </p>
                    </div>
                </div>
                ) : (<div></div>)
                }
                <div className="nav-box">
                    <div>
                        <a href="/">Back to Work</a>
                    </div>
                    <div>
                        {prevModal &&
                            <a href={`/works/${prevModal.id}`}>previous</a>}
                        {prevModal && nextModal && <span> | </span>}
                        {nextModal &&
                            <a href={`/works/${nextModal.id}`}>next</a>}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}



