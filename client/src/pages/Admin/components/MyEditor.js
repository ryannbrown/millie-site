import react from "react";
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import "./style.css";



export default class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" }; // You can also pass a Quill Delta here

  }

  modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }
 
 formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]
  

  handleChange = (value) => {
    this.setState({ text: value });
    this.props.handleRichChange(value)
  }
  
  render() {
    return (
      <div className="editor-block">
        <ReactQuill theme="snow"
                    placeholder='Work Description'
                    modules={this.modules}
                    formats={this.formats} value={this.state.text} onChange={this.handleChange}></ReactQuill>
      </div>
    );
  }
}
