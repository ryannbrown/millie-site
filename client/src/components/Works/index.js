
import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import { Card, ListGroup, ListGroupItem, Button, Image, CardDeck, Spinner } from 'react-bootstrap';
// import App from "../../App"
import './style.css';
// import doodle from "../../media/doodle.png"

export default class Works extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // worksObject: []
        };
    }

    navTo = (item) => {
     window.location.href =`/works/${item}`
    }


    componentDidMount() {

       
console.log(this.props.worksObject)
        // this.setState({
        //     worksObject: worksObject
        // })
    }



    render() {

        const worksCards = this.props.worksObject.map((item, i) =>
            <div onClick={()=>{this.navTo(i)}} className="off" style={{
                backgroundImage: `url(https://millie-site.s3.amazonaws.com/${item.image})`,
                backgroundColor: `pink`,
                // opacity: `90%`,
                backgroundBlendMode: `multiply`,
                backgroundPosition: `center`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`,
                // backgroundAttachment: `fixed`,
                display: `flex`,
                alignItems: `center`,
                position: `relative`,
                // padding:`15px`
                //   cover no-repeat center center fixed`
            }}>
                    {/* <Image className="off-image" src={item.image} /> */}
                    <div className="off-description">
                        <p className="off-title">{item.title}</p>
                    </div>

            </div>
        )


        return (
            <div className="works-page">
              
                <div className="parent mt-5">
                    <div className="off-box-parent">
                        <div className="off-box-container">
                            {worksCards}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}




