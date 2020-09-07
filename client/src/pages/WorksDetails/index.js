import React, { Component } from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Image,
  CardDeck,
  Table,
  Accordion,
  Spinner,
  Row,
  Col,
} from "react-bootstrap";
import "./style.css";
import $ from "jquery";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// const queryString = require('query-string');
import Navigation from "../../components/Navigation";
import logo from "../../media/millie-logo-colored.png";
import whiteLogo from "../../media/white-logo.png";
import pinkLogo from "../../media/millie-logo-colored.png";
require("dotenv").config();

export default class WorksDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenWork: "",
    };
  }

  addSpaces = () => {
    console.log("Adding spaces");
    $(".modal-description").each(function () {
      var text = $(this).text();
      $(this).html(text.replace(/\*/g, "<br><br>"));
    });
  };

  componentDidMount() {
    console.log(this.props.match.params);
    let param = Object.values(this.props.match.params);
    console.log(param);

    
    this.setState({
      chosenWork: param,
    });
    // this.addSpaces();
  }

  componentDidUpdate() {
    this.addSpaces();
  }

  render() {
    const { chosenWork, currentWork } = this.state;
    const prevModal = this.props.worksObject[Number(chosenWork) - 1];
    const thisModal = this.props.worksObject[chosenWork];
    const nextModal = this.props.worksObject[Number(chosenWork) + 1];
console.log("previous", prevModal)
console.log("this", thisModal)
console.log("next", nextModal)

if (prevModal) {
    var prevId = Number(chosenWork) - 1
}
if (nextModal) {
    var nextId = Number(chosenWork) + 1
}
    if (thisModal && thisModal.imgs) {
      var addPics = thisModal.imgs.map((item, i) => (
        <Image className="off-image-2" src={`https://millie-site.s3.amazonaws.com/${item}`} />
      ));
    }

    return (
      <div>
         <Navigation
          color="#FF8686"
          scrolledBgColor="#FF8686"
          scrolledColor="white"
          scrolledLogo={whiteLogo}
          logo={pinkLogo}
          scrollDistance="1"
        />

        <div className="works-page">
          {thisModal ? (
            <div className="works-container">
              <Row>
                <Col xs={{ span: 12, order: 2}} sm={{ span: 12, order: 2}} md={{ span: 6, order: 
                'first'}} lg={{ span: 6, order: 'first'}}>
                  <div className="off-image-container">
                    <Image
                      className="off-image img-responsive"
                      src={`https://millie-site.s3.amazonaws.com/${thisModal.image}`}
                    />
                  </div>
                </Col>
                <Col
                 xs={{ span: 12, order: 'first'}} sm={{span:12, order: 'first'}} md={{ span: 6, order: 2}} lg={{ span: 6, order: 2}}
                 >
                  <div className="works-description">
                    <h1 className="works-title">{thisModal.title}</h1>
                    {/* <hr style={{ width: `50%` }}></hr> */}
                    <p className="modal-description">{thisModal.description}</p>
                  </div>
                </Col>
              </Row>
            </div>
          ) : (
            <div></div>
          )}
          <div className="additional-pics">{addPics}</div>

          <div className="nav-box">
            <div>
              <a href="/">Back to Work</a>
            </div>
            <div>
              {prevModal && <a href={`/works/${prevId}`}>previous</a>}
              {prevModal && nextModal && <span> | </span>}
              {nextModal && <a href={`/works/${nextId}`}>next</a>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
