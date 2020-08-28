import React, { Component, } from "react";
import { Card, ListGroup, ListGroupItem, Button, Image, CardDeck, Table, Accordion, Spinner, Row, Col } from 'react-bootstrap';
import './style.css'
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// const queryString = require('query-string');


require("dotenv").config();

export default class WorksDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenWork: ''
        };
    }


    componentDidMount() {

        console.log(this.props.match.params)
        let param = Object.values(this.props.match.params);
        console.log(param)
        this.setState({
            chosenWork: param
        })
    };




    render() {




        const { chosenWork, currentWork } = this.state;
        // const {worksObject} = this.props;
        console.log(this.props.worksObject[0].image)
        const prevModal = this.props.worksObject[chosenWork - 1]
        const thisModal = this.props.worksObject[chosenWork];
        const nextModal = this.props.worksObject[chosenWork + 1];
        console.log(chosenWork + 1)
        console.log(nextModal);

        // this.setState({
        //     currentWork: this.props.worksObject
        // })

        // if (this.props.worksObject[0].length > 0) {
        //     try{
        //         console.log("yes!")
        //     } catch {
        //     console.log("oh no")
        // }
        // }
        // console.log(prevModal)
        // console.log(nextModal)

        // thisTitle= thisModal.title;

        console.log(this.props.worksObject.length)


        return (

            <div className="offerings-modal">


                {thisModal ? (
                    <div className="modal-box">
                        <Image className="off-image" src={thisModal.image} />
                        <h1 className="primaryTextColor rob">{thisModal.title}</h1>
                        <hr style={{ width: `50%` }}></hr>
                        <p className="modal-description">{thisModal.description}
                        </p>
                        <a><p className="primaryTextColor">Learn More</p></a>
                    </div>
                ) : (<div></div>)
                }
                {prevModal &&
                <a href={`/works/${prevModal.id}`}>previous</a>}
                {nextModal &&
                <a href={`/works/${nextModal.id}`}>next</a>}
            </div>
        )
    }
}



