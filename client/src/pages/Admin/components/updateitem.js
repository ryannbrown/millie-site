import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem, Button, Image, CardDeck } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import AdminPanel from '../components/panel'
import Panel from './panel';
require("dotenv").config();

class UpdateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoggedIn: false,
            catData: [],
            itemUpdated: false,
            file: null,
            postData: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.title = React.createRef();
        this.body = React.createRef();
    }



    componentDidMount () {
        console.log("id:", this.props.id)

        fetch(`/api/getWork/${this.props.id}`)
        .then(res => res.json())
        .then(json => {
          console.log("inventory", json.data[0])
          this.setState({
            postData: json.data[0],
            isLoading: false,
          })
          var size = Object.keys(this.state.postData).length;
          console.log(size);
        })
    }

    fileChanged(event) {
        console.log(event)
        var f = event.target.files;
        console.log(f)
        this.setState({
            file: f
        }, function () { console.log(this.state) });
    }

    handleSubmit(event) {
        event.preventDefault()
        let title = this.title.current.value
        let body = this.body.current.value

       
        const postItem = () => {
            console.log("Updating DB")
            // POST TO DB
            fetch('/api/updateWork', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                    body: body,
                    id: this.props.id
                })
                }).then(response => {
                    console.log("Updated!")
                    console.log(response)
                    if (response.status == '200') {
                        this.setState({
                            itemUpdated: true
                        })
                    }
            })

        }
        postItem()
     
    }


    render() {
        const { itemUpdated, postData } = this.state;


        if (!itemUpdated) {
            return (
                <div className="m-5">
                    <h1>Update Item</h1>
                    <form onSubmit={this.handleSubmit} encType="multipart/form-data" >
                    <Form.Label>Item Image</Form.Label>
                        <Form.Group controlId="addForm">
                            <Form.Label>Work Title: {postData.title}</Form.Label>
                            <Form.Control ref={this.title} type="text" placeholder="name of Work" />
                        </Form.Group>
                        <Form.Group controlId="addForm">
                            <Form.Label>Work Description: {postData.description}</Form.Label>
                            <Form.Control ref={this.body} as="textarea" rows="5" placeholder=" body of Work" />
                        </Form.Group>
                        <Button onClick={ () => {this.setState({itemUpdated:true})}} style={{ backgroundColor: 'rgb(255, 134, 134)' }} variant='dark' type="submit">
                            Back
        </Button>
                        <Button style={{ backgroundColor: 'rgb(255, 134, 134)' }} variant='dark' type="submit">
                            Submit
        </Button>
                    </form>
                </div>

            );
        } if (itemUpdated) {
            return (
                <div>
                    {/* <p className="text-center">Item updated!</p> */}
                    <AdminPanel itemUpdated="true"></AdminPanel>
                </div>
            )
        }
    }
}


export default UpdateItem;
