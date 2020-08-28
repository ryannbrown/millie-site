import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import './style.css';
// import moons from '../../media/bluemoons.png'
// import stars from '../../media/stars.png'
import CreateForm from '../../components/CreateForm'


export default class Offerings extends Component {

    constructor(props) {
        super(props);

        this.listener = null;
        this.state = {
            status: "top",
            showModal: false,
            forms: []
        };
    }


    openModal = (i) => {
        console.log(i, "clicked!")

        this.setState({
            showModal: true,
            chosenOffering: i
        })
    }
    closeModal = () => {
        console.log("clicked!")

        this.setState({
            showModal: false,
            createForm: false
        })
    }
    d
    deleteForm = (id) => {
        console.log(id)
        fetch('/delete', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
            })
        })
    }


    componentDidMount = () => {
   
  
        fetch(`/getforms`)
          .then(res => res.json())
          .then(json => {
              console.log(json)
            this.setState({
              forms: json.data,
              isLoading: false,
            })

          })
       
    }

    componentDidUpdate() {
        console.log("chosen:", this.state.chosenOffering)
        console.log(this.state.forms)
    }

    render() {

        const { offeringsObject, chosenOffering, forms } = this.state;

        const createdForms = this.state.forms.map((item, i) =>
        <div className="off">
            <button onClick={() => {this.deleteForm(item.id)}}>x</button>
                <div className="off-description">
                    <p className="off-title primaryTextColor">{item.name}</p>
                    <p className="off-price primaryTextColor"><b>${item.date}</b></p>
                </div>
        </div>
    )


        return (


            <div className="off-page">
                <div className="off-boxparent">
                    <div className="off-textbox">
                        <h1>Lets do stuff</h1>
                        <button onClick={() => {this.setState({createForm: true}) }}>Add New Form</button>
                    </div>
                    {this.state.createForm? (<CreateForm/>) 
                    : (<div></div>)}
<br></br>
<br></br>
                    <div>{createdForms}</div>
                    
                </div>
            </div>

        )

    }
}