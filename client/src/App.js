import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { Container, Nav, Button, Col, Row, Card } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Navigation from "./components/Navigation/index"
// import Homepage from "./pages/Homepage/index"
import doodle from "./media/doodle.jpg"
import book from "./media/book.jpg"
import candle from "./media/candle.jpg"
import penplane from "./media/penplane.jpg"
import pen from "./media/pen.jpg"
import ship from "./media/ship.JPG"
import standingPen from "./media/standingpen.jpg"
import woman from "./media/woman.JPG"
import Homepage from "./pages/Homepage/index"
import WorksDetails from "./pages/WorksDetails/index"
import Admin from "./pages/Admin/index.js"
import About from "./pages/About/index.js"
// import BlogPost from "./pages/BlogPost/index.js"
import Footer from "./components/Footer/index.js"
// import Portfolio from "./components/Portfolio/index"
// import Pricing from "./components/Pricing/index"
// import About from "./components/About/index"
// import Contact from "./components/Contact/index"
import createHistory from 'history/createBrowserHistory';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      worksObject: []
    };
    // this.handler = this.handler.bind(this);
  }


  fetchPosts() {
    fetch(`/api/getWorks/`)
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);
        this.setState({
          worksObject: json.data,
        });
      });
  }
  
componentDidMount() {
this.fetchPosts();


  // const history = createHistory({
  //   basename: process.env.PUBLIC_URL,
  // });

}
 
  render() {

    const {worksObject} = this.state;

  return (
    <div className="App">
      {/* <Navigation /> */}
      <Router
      //  history={history}
       >
        <Switch>
          <Route path="/admin" component={Admin}/>
          <Route path="/about" component={About}/>
          <Route path="/works/:id" render={(props) => <WorksDetails {...props} worksObject={worksObject} title={`Props through render`} />} />
          <Route exact path="/" render={(props) => <Homepage {...props} worksObject={worksObject} title={`Props through render`} />} />
        </Switch>
      </Router>
      <Footer></Footer>

    </div>
  );
}
}


export default App;
