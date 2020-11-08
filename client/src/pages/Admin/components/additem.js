import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem, Button, Image, CardDeck } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Panel from './panel';
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import MyEditor from "./MyEditor"
// import axios from 'axios';

// const queryString = require('query-string');

require("dotenv").config();

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoggedIn: false,
            catData: [],
            itemPosted: false,
            file: null,
            richText: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.fileChanged = this.fileChanged.bind(this);
        this.handleRichChange = this.handleRichChange.bind(this);
        this.img = React.createRef();
       this.title = React.createRef();
    }



    fileChanged(event) {
        console.log(event)
        var f = event.target.files;
        console.log(f)
        this.setState({
            file: f
        }, function () { console.log(this.state) });
        // console.log("state",this.state.file)

        // this.handleImage()
    }

   

    handleSubmit(event) {
        event.preventDefault()
        let img = this.img.current.value
        let title = this.title.current.value
        // let date = this.date.current.value
        // let body = this.body.current.value
        let richBody = this.state.richText

        console.log(richBody)

        // console.log(date);


        const filename = this.state.file[0].name

        const thisFormData = new FormData();
        thisFormData.append('element1', this.state.file[0]);
        var requestOptions = {
            method: 'POST',
            body: thisFormData,
            redirect: 'follow'
        };

        fetch("/api/upload/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        const postItem = () => {
            console.log("posting to DB")
            // POST TO DB
            fetch('/api/addWork', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    image: filename,
                    title: title,
                    // date: new Date,
                    // body: body
                    richBody: richBody
                })
            }).then(response => {
                console.log("hey i did it")
                console.log(response)
                if (response.status == '200') {
                    this.setState({
                        itemPosted: true
                    })
                }
            })

        }
        postItem()

    }




  handleRichChange = (value) => {
    // console.log("changing");
    console.log(value)
    this.setState({ richText: value });
    // console.log(value);
  }


    render() {
        const { itemPosted } = this.state;
        if (!itemPosted) {
            return (
                <div className="entry-form">
                    <h1>New Work</h1>
                    <form onSubmit={this.handleSubmit} encType="multipart/form-data" >

                        <Form.Label>Item Image</Form.Label>
                        <input
                            onChange={this.fileChanged.bind(this)}
                            ref={this.img}
                            type="file" required placeholder="Upload File" />


                        <Form.Group controlId="addForm">
                            <Form.Label>Work Title</Form.Label>
                            <Form.Control ref={this.title} type="text" placeholder="Work Title" />
                        </Form.Group>
                        <Form.Group controlId="addForm">
                            <Form.Label>Work Description</Form.Label>
                            <MyEditor handleRichChange={this.handleRichChange}></MyEditor>
                        </Form.Group>

                      
                        
                        
                        <Button onClick={ () => {this.setState({itemPosted:true})}} style={{ backgroundColor: 'rgb(255, 134, 134)' }} variant='dark' type="submit">
                            Back
        </Button>
                        <Button style={{ backgroundColor: 'rgb(255, 134, 134)' }} variant='dark' type="submit">
                            Submit
        </Button>
                    </form>

                
        </div>

            );
        } if (itemPosted) {
            return (
                <div>
                    {/* <p className="text-center">Item has been posted!</p> */}
                    <Panel itemPosted="true"></Panel>
                    {/* <a href="/admin"><Button style={{ backgroundColor: '#dd6717', margin: '0px auto;' }} variant='dark'>Inventory List</Button></a> */}
                </div>
            )
        }
    }

}


export default AddItem;
